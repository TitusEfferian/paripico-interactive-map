interface CircleTypes {
    section: string;
    child: {
        circle_name: string;
        circle_id: string;
    }[];
}
const circle_data: CircleTypes[] = [
    {
        section: 'WALL CIRCLE',
        child: [
            {
                circle_id: 'W01',
                circle_name: 'Clownery Studio'
            },
            {
                circle_id: 'W02',
                circle_name: 'Bukan Travel Agent'
            },
            {
                circle_id: 'W03',
                circle_name: 'Sunny Day Circle'
            },
            {
                circle_id: 'W04',
                circle_name: 'Federasi Biji'
            },
            {
                circle_id: 'W05',
                circle_name: 'Naderu'
            },
            {
                circle_id: 'W06',
                circle_name: 'Federasi Biji'
            }, {
                circle_id: 'W04',
                circle_name: 'Federasi Biji'
            }, {
                circle_id: 'W04',
                circle_name: 'Federasi Biji'
            },
        ]
    }
]

export type {
    CircleTypes
}

export default circle_data;