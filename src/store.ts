import { create } from 'zustand';
import { Overtime, Totals } from './model/model';
import { SharedSelection } from '@nextui-org/react';

interface DashboardStore {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    loading: false,
    setLoading: (loading) => set({ loading: loading }),
}));
