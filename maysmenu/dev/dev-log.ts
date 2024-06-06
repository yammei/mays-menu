const devMode: boolean = true;
const defaultMessage = 'No input message inputed for devLog.';

export function devLog(inputMessage: string=defaultMessage): void {
    try {
        if (devMode) {
            console.log(`${inputMessage}`);
        }
        return
    } catch (e) {
        console.log(`Error: ${e}.`);
    }
}
