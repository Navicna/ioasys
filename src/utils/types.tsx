
export const getEnterpriseID = (type: string) => 
    ({
        'Biotechnology': 5,
        'Construction': 4,
        'Education': 10,
        'Fintech': 2,
        'Food': 16,
        'Games': 15,
        'HR Tech': 6,
        'Health': 3,
        'IT': 7,
        'Industry': 23,
        'IoT': 26,
        'Marketplace': 21,
        'Music': 27,
        'Service': 12,
        'Social': 13,
        'Software': 11,
        'Sports': 19,
        'Transport': 24,
        'Green': 28,

    }[type])

    export const getEnterpriseByType = (id: number) => 
    ({
        5: 'Biotechnology',
        4: 'Construction',
        10: 'Education',
        2: 'Fintech',
        16: 'Food',
        15: 'Games',
        6: 'HR Tech',
        3: 'Health',
        7: 'IT',
        23: 'Industry',
        26: 'IoT',
        21: 'Marketplace',
        27: 'Music',
        12: 'Service',
        13: 'Social',
        11: 'Software',
        19: 'Sports',
        24: 'Transport',
        28: 'Green',
    }[id])