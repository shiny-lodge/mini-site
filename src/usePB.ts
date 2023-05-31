import PocketBase from 'pocketbase';

export const usePB = () => {

    const pb = new PocketBase('https://607f-46-138-1-63.ngrok-free.app');

    return { pb };
}