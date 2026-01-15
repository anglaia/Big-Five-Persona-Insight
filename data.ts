
import { PersonalityReport } from './types';

export const reportData: PersonalityReport = {
  id: "6968374ef65d71b593aa47a5",
  date: "2026-01-15",
  traits: [
    {
      id: "neuroticism",
      name: "Neuroticism",
      nameZh: "神经质",
      totalScore: 90,
      color: "#8b5cf6", // Purple
      description: "Neuroticism refers to the tendency to experience negative feelings. Your score is high, indicating sensitivity and emotional depth.",
      descriptionZh: "神经质是指体验负面情绪的倾向。您的得分较高，这表明您敏感且情绪化，对日常生活压力较为敏感。",
      facets: [
        { name: "Anxiety", nameZh: "焦虑", score: 18, level: 'high', description: "Focuses on the tendency to feel tense or nervous.", descriptionZh: "倾向于感到紧张或不安。" },
        { name: "Anger", nameZh: "愤怒", score: 10, level: 'low', description: "Measures the tendency to feel enraged.", descriptionZh: "衡量感到愤怒的倾向。" },
        { name: "Depression", nameZh: "抑郁", score: 16, level: 'high', description: "Tendency to feel sad or discouraged.", descriptionZh: "感到悲伤或气馁的倾向。" },
        { name: "Self-Consciousness", nameZh: "自我意识", score: 14, level: 'high', description: "Sensitivity about what others think.", descriptionZh: "在意他人看法的敏感度。" },
        { name: "Immoderation", nameZh: "不节制", score: 16, level: 'high', description: "Difficulty resisting strong cravings.", descriptionZh: "难以抗拒强烈渴望的倾向。" },
        { name: "Vulnerability", nameZh: "脆弱性", score: 16, level: 'high', description: "Feeling panic or confusion under stress.", descriptionZh: "在压力下感到恐慌或困惑。" }
      ]
    },
    {
      id: "extraversion",
      name: "Extraversion",
      nameZh: "外向性",
      totalScore: 66,
      color: "#3b82f6", // Blue
      description: "Extraversion is marked by engagement with the external world. Your moderate score suggests a balance between solitude and social engagement.",
      descriptionZh: "外向性以显著的外部世界参与为特征。得分表明您更内向矜持，享受独处，社交倾向于亲密朋友。",
      facets: [
        { name: "Friendliness", nameZh: "友善度", score: 9, level: 'low', description: "Openness in demonstrating positive feelings.", descriptionZh: "公开表达积极情感的开放度。" },
        { name: "Gregariousness", nameZh: "群居性", score: 6, level: 'low', description: "Enjoyment of company and crowds.", descriptionZh: "对同伴和人群的喜爱程度。" },
        { name: "Assertiveness", nameZh: "自信心", score: 14, level: 'high', description: "Tendency to speak out and take charge.", descriptionZh: "敢于直言并掌控局面的倾向。" },
        { name: "Activity Level", nameZh: "活动水平", score: 13, level: 'high', description: "Pace of life and energy expenditure.", descriptionZh: "生活的节奏和精力的消耗。" },
        { name: "Excitement-Seeking", nameZh: "寻求刺激", score: 12, level: 'neutral', description: "Need for environmental stimulation.", descriptionZh: "对环境刺激的需求。" },
        { name: "Cheerfulness", nameZh: "开朗", score: 12, level: 'neutral', description: "Tendency to experience positive moods.", descriptionZh: "体验积极情绪的倾向。" }
      ]
    },
    {
      id: "openness",
      name: "Openness",
      nameZh: "经验开放性",
      totalScore: 83,
      color: "#ec4899", // Pink
      description: "Describes cognitive style that distinguishes imaginative people. You enjoy novelty, variety, and change.",
      descriptionZh: "描述区分富有想象力的人的认知风格。您充满好奇心，喜欢新奇、多样化和变化。",
      facets: [
        { name: "Imagination", nameZh: "想象力", score: 16, level: 'high', description: "Use of fantasy to create a richer world.", descriptionZh: "利用幻想创造更丰富的世界。" },
        { name: "Artistic Interests", nameZh: "艺术兴趣", score: 18, level: 'high', description: "Love for beauty in art and nature.", descriptionZh: "对艺术和自然之美的热爱。" },
        { name: "Emotionality", nameZh: "情绪性", score: 17, level: 'high', description: "Awareness of one's own feelings.", descriptionZh: "对自身感受的觉察。" },
        { name: "Adventurousness", nameZh: "冒险精神", score: 8, level: 'low', description: "Eagerness to try new activities.", descriptionZh: "尝试新活动的渴望。" },
        { name: "Intellect", nameZh: "智力", score: 14, level: 'high', description: "Openness to new and unusual ideas.", descriptionZh: "对新奇想法的开放态度。" },
        { name: "Liberalism", nameZh: "自由主义", score: 10, level: 'low', description: "Readiness to challenge authority.", descriptionZh: "挑战权威和惯例的意愿。" }
      ]
    },
    {
      id: "agreeableness",
      name: "Agreeableness",
      nameZh: "宜人性",
      totalScore: 79,
      color: "#f59e0b", // Orange/Gold
      description: "Reflects individual differences in concern with cooperation. You are pleasant, sympathetic, and cooperative.",
      descriptionZh: "反映在合作方面的个体差异。您非常关注他人的需求和福祉，乐于合作。",
      facets: [
        { name: "Trust", nameZh: "信任", score: 12, level: 'neutral', description: "Belief that others are fair and honest.", descriptionZh: "相信他人是公平诚实的。" },
        { name: "Morality", nameZh: "道德感", score: 15, level: 'high', description: "Need for sincerity and directness.", descriptionZh: "对真诚和直率的需求。" },
        { name: "Altruism", nameZh: "利他主义", score: 11, level: 'low', description: "Reward found in helping others.", descriptionZh: "从帮助他人中获得的奖励。" },
        { name: "Cooperation", nameZh: "合作", score: 16, level: 'high', description: "Dislike for confrontations and conflict.", descriptionZh: "对对抗和冲突的反感。" },
        { name: "Modesty", nameZh: "谦虚", score: 13, level: 'high', description: "Lack of need for superior self-claims.", descriptionZh: "不需要声称自己优于他人。" },
        { name: "Sympathy", nameZh: "同情心", score: 12, level: 'neutral', description: "Being tenderhearted and compassionate.", descriptionZh: "心地善良、富有同情心。" }
      ]
    },
    {
      id: "conscientiousness",
      name: "Conscientiousness",
      nameZh: "尽责性",
      totalScore: 82,
      color: "#10b981", // Green
      description: "Concerns the way we control and direct impulses. You are reliable, hard-working, and set clear goals.",
      descriptionZh: "关乎我们如何控制和引导冲动。您设定明确目标并坚定追求，被认为可靠勤奋。",
      facets: [
        { name: "Self-Efficacy", nameZh: "自我效能感", score: 17, level: 'high', description: "Confidence in ability to accomplish things.", descriptionZh: "对完成事情能力的信心。" },
        { name: "Orderliness", nameZh: "条理性", score: 15, level: 'high', description: "Organization and adherence to schedules.", descriptionZh: "组织能力和对时间表的遵循。" },
        { name: "Dutifulness", nameZh: "尽职尽责", score: 17, level: 'high', description: "Sense of duty and moral obligation.", descriptionZh: "责任感和道德义务感。" },
        { name: "Achievement-Striving", nameZh: "成就驱动", score: 9, level: 'low', description: "Drive to be recognized as successful.", descriptionZh: "追求成功并获得认可的驱动力。" },
        { name: "Self-Discipline", nameZh: "自律", score: 14, level: 'high', description: "Ability to persist at difficult tasks.", descriptionZh: "在困难任务中坚持的能力。" },
        { name: "Cautiousness", nameZh: "谨慎", score: 10, level: 'low', description: "Disposition to think before acting.", descriptionZh: "三思而后行的倾向。" }
      ]
    }
  ]
};
