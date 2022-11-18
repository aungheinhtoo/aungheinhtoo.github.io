export default interface Project {
    displayName: string;
    end: {
        year: number,
        month: number,
    };
    endDate: string;
    start: {
        year: number,
        month: number,
    }
    stateDate: string;
    languages: string[];
}