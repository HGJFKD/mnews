export type AdStatus = 'active' | 'inactive' | 'pending';

export type HandlerAgent = 'director' | 'sales agent' | 'chief graphic artist' | 'sub graphic designer';

export interface AdObject {
    id: number;
    userName: string;
    adSize: string;
    datePublished: string;
    adLocation: string;
    prize: number;
    status: AdStatus;
    handlerAgent: HandlerAgent;
}