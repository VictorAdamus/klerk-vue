import imgcard1 from '../assets/card-1.png'
import imgcard2 from '../assets/card-2.png'
import imgcard3 from '../assets/card-3.png'
import imgcard4 from '../assets/card-4.png'

export const cards = [
    {
        id: 1,
        periodicity: 'Перед рассветом',
        title: 'Утренний бухгалтер',
        description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
        subtitleList: [{
            id: 1,
            title: 'Новости для бухгалтеров, ИП и директора'
        }, {
            id: 2,
            title:'Подборка статей за день',
        }],
        subscribers: 'Уже получает  человек',
        checked: true,
        image: imgcard1,
    },
    {
        id: 2,
        periodicity: 'После заката',
        title: 'Ночной бухгалтер',
        description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
        subtitleList: [{
            id: 1,
            title: 'Анализ, оценка и только самое главное',
        }, {
            id: 2,
            title:'Лучшие комменты юзеров в обзоре',
        }],
        subscribers: 'Уже получает 37 480 человек',
        checked: false,
        image: imgcard2
    },
    {
        id: 3,
        periodicity: 'Раз в две недели',
        title: 'Ножницы скидок',
        description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
        subtitleList: [{
            id: 1,
            title: 'Акции и скидки от лидеров рынка',
        }, {
            id: 2,
            title:'Те, кто подписался – экономят много денег',
        }],
        subscribers: 'Уже получает 92 118 человек',
        checked: false,
        image: imgcard3
    }, 
    {
        id: 4,
        periodicity: 'По мере появления анонсов',
        title: 'Чемодан вебинаров',
        description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
        subtitleList: [{
            id: 1,
            title: 'Никогда не пришлем платные вебинары',
        }, {
            id: 2,
            title:'Подборка топовых тем для вебинаров',
        }],
        subscribers: 'Уже получает 92 082 человек',
        checked: false,
        image: imgcard4
    }
]