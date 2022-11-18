export default interface Education {
    activities: string;
    area: string;
    description: string;
    end: {
        year: number,
        month: number,
    };
    endDate: string;
    gpa: string;
    institution: string;
    score: string;
    start: {
        year: number,
        month: number,
    }
    stateDate: string;
    studyType: string;
}