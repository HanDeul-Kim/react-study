let dataAll = [
    {
        id: 0,
        title: '모던 블레이저',
        content: '울 코튼 혼방으로 제작이 된 세미 컨스트럭티드 블레이저입니다.',
        price: '139,000원'
    },
    {
        id: 1,
            title: '롱슬리브 메리노 폴로 셔츠',
            content: '폴로에서 영감을 받은 롱슬리브의 스웨터입니다.',
            price: '89,000원'
    },
    {
        id: 2,
            title: '헤비 니트 울 스웨터',
            content: 'RWS 인증 울과 나일론으로 제작되어 가벼운 감촉을 선사합니다.',
            price: '109,000원'
    },
    {
        id: 3,
        title: "파인 니트 메리노 스웨터",
        content: "매우 섬세한 메리노 울로 제작이 된 골지 질감의 밑단과 소매가 있는 클래식 플레인 니티드 스웨터입니다.",
        price: "90,000원"
    },
    {
        id: 4,
        title: "레귤러핏 코튼 셔츠",
        content: "순수한 코튼으로 만들어진 레귤러 핏 셔츠입니다.",
        price: "59,000원"
    },
    {
        id: 5,
        title: "울 폴리스 자켓",
        content: "울과 부드러운 플리스 패브릭의 혼방으로 만들어진 재킷입니다.",
        price: "130,000원"
    },
    {
        id: 6,
        title: "포켓 폴리스",
        content: "포켓이 있는 따뜻한 폴리스의 긴팔입니다.",
        price: "99,000원"
    },
    {
        id: 7,
        title: "코듀로이 셔츠",
        content: "기본적인 코듀로이 셔츠입니다.",
        price: "69,000원"
    },
    {
        id: 8,
        title: "릴렉스핏 반팔",
        content: "cotton 100%로 만든 기본 반팔티입니다.",
        price: "31,000원"
    },
    {
        id: 9,
        title: "화이트 플레어 진",
        content: "와이드 레그와 로우 웨이스트로 디자인이 된 루즈 핏의 진입니다.",
        price: "120,000원"
    },
    {
        id: 10,
        title: "코튼 트윌 트라우저",
        content: "넓고 긴 기장의 하이 웨이스트 코튼 트윌 팬츠입니다.",
        price: "89,000원"
    },
    {
        id: 11,
        title: "스트레이트 블루 진",
        content: "오가닉 면과 재활용 면의 신축성 있는 혼방 소재로 제작된 이 진은 스트레이트 핏이 특징입니다.",
        price: "129,000원"
    },
    {
        id: 12,
        title: "비스코스 리넨 쇼츠",
        content: "비스코스와 리넨의 혼방 소재로 제작된 반바지입니다.",
        price: "97,000원"
    },
    {
        id: 13,
        title: "코튼 스웨트 팬츠",
        content: "이 스웨트 팬츠는 부드러운 촉감과 수분 발산 기능을 제공하여 편안함과 건조함을 유지해 줍니다.",
        price: "57,000원"
    },
    {
        id: 14,
        title: "와이드 레그 진",
        content: "탄탄한 데님 패브릭으로 제작이 되었으며, 와이드 핏입니다.",
        price: "70,000원"
    },
    {
        id: 15,
        title: "슬림 블랙진",
        content: "기본이 되는 100% 면 재질의 블랙진 입니다.",
        price: "59,000원"
    },
    {
        id: 16,
        title: "드로스트링 쇼츠",
        content: "기존 면 쇼츠에서 신축성 좋은 허릿단과 드로우스트링을 더했습니다. ",
        price: "53,000원"
    },
    {
        id: 17,
        title: "포플린 쇼츠",
        content: "포플린 패브릭으로 만들어져 허벅지 중간까지 오는 기장으로 허리는 신축성이 있게 디자인이 되었습니다. ",
        price: "55,000원"
    },
    {
        id: 18,
        title: "레더 로퍼",
        content: "포르투갈산 가죽 소재로 만들어진 모카신 스타일의 로퍼입니다.",
        price: "179,000원"
    },
    {
        id: 19,
        title: "클래식 로우 로퍼",
        content: "부드럽고 매트한 질감의 가죽 소재로 만들어진 로퍼입니다.",
        price: "220,000원"
    },
    {
        id: 20,
        title: "레더 스웨이드 슈즈",
        content: "발목 부분을 폭신하게 덧대어 편안한 착용감이 돋보이는 아이템입니다.",
        price: "69,000원"
    },
    {
        id: 21,
        title: "레더 앵클 부츠",
        content: "은은한 광택감이 돋보이는 크롬 프리 가죽 소재로 만들어졌습니다.",
        price: "188,000원"
    },
    {
        id: 22,
        title: "스트랩 슬라이드 샌들",
        content: "미니멀을 더해 친환경적인 폼을 활용해 만들었습니다.",
        price: "63,000원"
    },
    {
        id: 23,
        title: "하이탑 슈즈",
        content: "편안한 고무 밑창과 미니멀한 디자인을 더한 스니커즈입니다.",
        price: "115,000원"
    },
    {
        id: 24,
        title: "레더 베이식 부츠",
        content: "라운드 토와 신축성 있는 측면 패널을 더해 편안한 실루엣으로 완성되었습니다.",
        price: "140,000원"
    },
    {
        id: 25,
        title: "레더 첼시 부츠",
        content: "자연스럽가 마감된 가장자리와 신축성 있는 측면 패널이 특징입니다.",
        price: "290,000원"
    },
    {
        id: 26,
        title: "롱 레더 첼시 부츠",
        content: "밑창과 자연적으로 느껴지는 대조감을 느낄 수 있는 부츠입니다.",
        price: "279,000원"
    },
]
export default dataAll;