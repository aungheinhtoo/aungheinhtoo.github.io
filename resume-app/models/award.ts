interface Award {
    awarder: string;
    date: string;
    fullDate: {
        month: number,
        year: number
    },
    summary: string;
    title: string;
}
export default Award;