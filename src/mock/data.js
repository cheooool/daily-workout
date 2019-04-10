const data = [
  {
    id: 1,
    parts: '가슴',
    name: '벤치프레스',
    type: [
      {
        label: 'Weight',
        name: 'weight',
        checked: true
      },
      {
        label: 'Reps',
        name: 'reps',
        checked: true
      },
      {
        label: 'Time',
        name: 'time',
        checked: false
      }
    ],
    sets: [
      {
        weight: 60,
        reps: 12
      },
      {
        weight: 70,
        reps: 10
      },
      {
        weight: 80,
        reps: 8
      }
    ],
    createdAt: '2018-01-01'
  },
  {
    id: 2,
    parts: '다리',
    name: '스쿼트',
    type: [
      {
        label: 'Weight',
        name: 'weight',
        checked: true
      },
      {
        label: 'Reps',
        name: 'reps',
        checked: true
      },
      {
        label: 'Time',
        name: 'time',
        checked: false
      }
    ],
    sets: [
      {
        weight: 70,
        reps: 8
      },
      {
        weight: 80,
        reps: 8
      }
    ],
    createdAt: '2018-01-01'
  },
  {
    id: 3,
    parts: '팔',
    name: '덤벨 컬',
    type: [
      {
        label: 'Weight',
        name: 'weight',
        checked: true
      },
      {
        label: 'Reps',
        name: 'reps',
        checked: true
      },
      {
        label: 'Time',
        name: 'time',
        checked: false
      }
    ],
    sets: [
      {
        weight: 15,
        reps: 8
      }
    ],
    createdAt: '2018-01-01'
  },
  {
    id: 4,
    parts: '전신',
    name: '데드리프트',
    type: [
      {
        label: 'Weight',
        name: 'weight',
        checked: true
      },
      {
        label: 'Reps',
        name: 'reps',
        checked: true
      },
      {
        label: 'Time',
        name: 'time',
        checked: false
      }
    ],
    sets: [],
    createdAt: '2018-01-01'
  }
];

export default data;
