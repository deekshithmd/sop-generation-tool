export const initialFormState = {
    email: { value: "", isFocussed: false },
    name: { value: "", isFocussed: false },
    age: { value: "", isFocussed: false },
    qualification: { value: "", isFocussed: false },
    institute: { value: "", isFocussed: false },
    field: { value: "", isFocussed: false },
    experience: { value: "", isFocussed: false },
    institutecanada: { value: "", isFocussed: false },
    programcanada: { value: "", isFocussed: false },
    countryorigin: { value: "", isFocussed: false },
    goals: { value: "", isFocussed: false },
    listening: { value: "", isFocussed: false },
    reading: { value: "", isFocussed: false },
    speaking: { value: "", isFocussed: false },
    writing: { value: "", isFocussed: false },
    firsttution: { value: "no", isFocussed: false },
    tutionfees: { value: "", isFocussed: false },
    gic: { value: "no", isFocussed: false },
    gicpay: { value: "", isFocussed: false },
}

export const qualificationList = [
    {
        id: '1',
        name: 'Grade 12',
        value: 'grade12'
    },
    {
        id: '2',
        name: 'Diploma',
        value: 'diploma'
    },
    {
        id: '3',
        name: "Bachelor's Degree",
        value: 'bachelor'
    },
    {
        id: '4',
        name: "Master's Degree",
        value: 'master'
    },
    {
        id: '5',
        name: 'PhD',
        value: 'phd'
    }
]

export const qualificationSet = {
    'grade12': 'Grade 12',
    'diploma': 'Diploma',
    'bachelor': "Bachelor's Degree",
    'master': "Master's Degree",
    'phd': 'PhD',
}