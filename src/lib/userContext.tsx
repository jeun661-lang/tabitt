'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { TravelType } from '@/types';

export interface UserProfile {
  nickname: string;
  toneType: TravelType | null;
  badges: string[];
  visits: Record<string, number>;
}

const defaultProfile: UserProfile = {
  nickname: '',
  toneType: null,
  badges: [],
  visits: {},
};

interface UserContextValue {
  profile: UserProfile;
  isLoggedIn: boolean;
  updateProfile: (updates: Partial<UserProfile>) => void;
  unlockBadge: (badgeId: string) => void;
  setToneType: (type: TravelType) => void;
}

const UserContext = createContext<UserContextValue>({
  profile: defaultProfile,
  isLoggedIn: false,
  updateProfile: () => {},
  unlockBadge: () => {},
  setToneType: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tabitt-profile');
    if (saved) {
      try {
        setProfile({ ...defaultProfile, ...JSON.parse(saved) });
      } catch { /* ignore */ }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem('tabitt-profile', JSON.stringify(profile));
    }
  }, [profile, loaded]);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  const unlockBadge = useCallback((badgeId: string) => {
    setProfile((prev) => {
      if (prev.badges.includes(badgeId)) return prev;
      return { ...prev, badges: [...prev.badges, badgeId] };
    });
  }, []);

  const setToneType = useCallback((type: TravelType) => {
    setProfile((prev) => {
      const badgeId = `type-${type}`;
      const badges = prev.badges.includes(badgeId)
        ? prev.badges
        : [...prev.badges, badgeId];
      return { ...prev, toneType: type, badges };
    });
  }, []);

  const isLoggedIn = !!profile.nickname;

  return (
    <UserContext.Provider value={{ profile, isLoggedIn, updateProfile, unlockBadge, setToneType }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
