import HomeSection from "@/components/home/home-section/home-section";
import HomeSectionHeader from "@/components/home/home-section/home-section-header";
import HomeSectionBody from "@/components/home/home-section/home-section-body";
import RecordCard from "@/components/record-card/review-card/record-card";
import { recentRecordSectionStyles } from "./style.css";

const recentRecords = [
  {
    id: 1,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "알쓸신잡",
    rating: 100,
    updatedAt: "2025-01-12",
    title: "빌게이츠 자서전",
    description: "나도 조만장자가 될꺼야",
  },
  {
    id: 2,
    coverImageUrl:
      "https://image.aladin.co.kr/product/31909/48/cover500/8937427923_1.jpg",
    bookTitle: "미래의 부",
    rating: 80,
    updatedAt: "2025-01-15",
    title: "부의 흐름을 읽다",
    description:
      "미래의 경제 흐름을 분석하며 부를 얻는 방법을 제시하는 책입니다. 경제와 기술의 발전이 가져올 변화 속에서 개인이 준비해야 할 전략과 행동을 상세히 다룹니다. 부를 쌓는 기본 원칙과 함께 실용적인 팁까지 제공하여 실질적인 도움을 줍니다.",
  },
  {
    id: 3,
    coverImageUrl:
      "https://image.aladin.co.kr/product/31909/48/cover500/8937427923_1.jpg",
    bookTitle: "어른의 공부법",
    rating: 70,
    updatedAt: "2025-01-18",
    title: "끊임없이 배우는 자세",
    description:
      "어른이 되어도 배움을 멈추지 않는 방법을 알려주는 실용서입니다. 나이가 들수록 학습 능력이 떨어진다고 생각하는 사람들에게 새로운 가능성을 열어줍니다. 자기 계발과 성장에 대한 동기 부여와 함께 구체적인 학습 방법을 제시합니다.",
  },
  {
    id: 4,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "달까지 가자",
    rating: 90,
    updatedAt: "2025-01-20",
    title: "도전을 위한 에너지",
    description:
      "한계를 뛰어넘는 도전의 과정을 다룬 감동적인 이야기입니다. 자신의 꿈을 이루기 위해 노력한 사람들의 성공담과 실패를 솔직히 담아내며, 독자들에게 용기와 영감을 줍니다. ",
  },
  {
    id: 5,
    coverImageUrl:
      "https://image.aladin.co.kr/product/3998/83/cover500/8956607745_1.jpg",
    bookTitle: "심리학으로 본 인간 관계",
    rating: 70,
    updatedAt: "2025-01-22",
    title: "사람의 마음 읽기",
    description:
      "타인의 마음을 이해하고 더 나은 관계를 만드는 심리학적 접근이 담긴 책입니다. 사람들의 행동과 생각 뒤에 숨겨진 이유를 탐구하며 인간관계의 복잡한 문제를 풀어나가는 데 도움을 줍니다. 실생활에서 바로 적용할 수 있는 팁도 가득합니다. 타인의 마음을 이해하고 더 나은 관계를 만드는 심리학적 접근이 담긴 책입니다. 사람들의 행동과 생각 뒤에 숨겨진 이유를 탐구하며 인간관계의 복잡한 문제를 풀어나가는 데 도움을 줍니다. 실생활에서 바로 적용할 수 있는 팁도 가득합니다.",
  },
  {
    id: 6,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "행복의 기술",
    rating: 60,
    updatedAt: "2025-01-25",
    title: "작은 행복의 발견",
    description:
      "행복을 찾는 여정을 짧고 명쾌한 방식으로 설명한 책입니다. 일상의 작은 순간 속에서 행복을 찾는 법.",
  },
  {
    id: 7,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "생각의 속도",
    rating: 30,
    updatedAt: "2025-01-28",
    title: "빠르게 결정하는 법",
    description:
      "복잡한 문제를 빠르게 해결하고 의사결정을 내리는 방법을 다룬 책입니다. 다양한 사례를 통해 논리적 사고를 기반으로 한 신속한 결정의 중요성을 설명합니다. 현대인의 바쁜 삶에 꼭 필요한 실용적인 조언이 가득합니다.",
  },
  {
    id: 8,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "서른의 모험",
    rating: 20,
    updatedAt: "2025-01-30",
    title: "청춘의 후반전을 준비하다",
    description:
      "서른 즈음의 사람들이 겪는 다양한 경험과 고민을 다룬 책입니다. 새로운 도전을 꿈꾸는 이들에게 현실적이면서도 희망적인 메시지를 전달하며, 독자들이 더 나은 방향으로 나아갈 수 있도록 격려합니다.",
  },
  {
    id: 9,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "마음챙김의 중요성",
    rating: 100,
    updatedAt: "2025-02-01",
    title: "나를 위한 시간",
    description:
      "바쁜 현대인들에게 마음챙김의 중요성을 강조하는 힐링 도서입니다. 명상과 자기 돌봄을 통해 정신적, 육체적 건강을 회복하는 방법을 제안합니다. 독자들에게 평온한 일상을 선사할 수 있는 유용한 가이드입니다.",
  },
  {
    id: 10,
    coverImageUrl:
      "https://image.aladin.co.kr/product/35718/16/cover500/893292497x_2.jpg",
    bookTitle: "인생을 바꾸는 글쓰기",
    rating: 100,
    updatedAt: "2025-02-05",
    title: "글로 쓰는 나의 이야기",
    description:
      "글쓰기를 통해 자신의 삶을 돌아보고 변화시키는 방법을 안내합니다. 감정을 기록하고 생각을 정리하는 과정을 통해 자신을 이해하고 성장할 수 있도록 돕는 책입니다. 글쓰기를 시작하려는 사람들에게 큰 영감을 줍니다.",
  },
];

const RecordsEmpty = () => {
  return <div>"아직 작성된 기록이 없어요"</div>;
};

const RecentRecordsSection = () => {
  const isEmpty = recentRecords.length === 0;
  return (
    <HomeSection>
      <HomeSectionHeader
        title="최근 기록 📚"
        description="기록을 차곡 차곡 쌓아보세요"
      />
      <HomeSectionBody>
        {
          <>
            {isEmpty && <RecordsEmpty />}
            {!isEmpty && (
              <ul className={recentRecordSectionStyles.list}>
                {recentRecords.map(
                  ({
                    id,
                    title,
                    description,
                    coverImageUrl,
                    bookTitle,
                    updatedAt,
                    rating,
                  }) => (
                    <li key={id}>
                      <RecordCard
                        id={id}
                        title={title}
                        description={description}
                        coverImageUrl={coverImageUrl}
                        bookTitle={bookTitle}
                        updatedAt={updatedAt}
                        rating={rating}
                      />
                    </li>
                  )
                )}
              </ul>
            )}
          </>
        }
      </HomeSectionBody>
    </HomeSection>
  );
};

export default RecentRecordsSection;
