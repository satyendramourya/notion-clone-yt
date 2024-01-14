"use server";
import { db } from "./db"
import { File, Folder, Subscription, User, workspace } from './supabase.types';
import { files, folders, users, workspaces } from '../../../migrations/schema';

export const getUserSubscriptionStatus = async (userId: string) => {
    try {
        const data = await db.query.subscriptions.findFirst({
            where: (s, { eq }) => eq(s.userId, userId),
        });

        if (data) return {
            data: data as Subscription, error: null
        };
        else return {
            data: null, error: null
        };
    } catch (error) {
        console.log(error);
        return { data: null, error: `Error ${error}` }
    }
};

export const createWorkspace = async (workspace: workspace) => {
    try {
        const response = await db.insert(workspaces).values(workspace);
        return { data: null, erro: null };
    } catch (error) {
        console.log(error);
        return { data: null, error: `Error ${error}` }
    }
};