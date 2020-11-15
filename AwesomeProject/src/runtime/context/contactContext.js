import { createContext, useContext } from 'react';
import { PlanningStatus } from 'Model/applicationContext/contactStatus';

export let ContactContext = {
    contactStatus: PlanningStatus.CANCELLED
}

export const ContactContextAccessor = createContext();

export function useContactContext() {

    return useContext(ContactContextAccessor);
}