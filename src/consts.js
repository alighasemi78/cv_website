import study from "./images/study.svg";
import breastCancer from "./images/breast-cancer.png";
import fashionClass from "./images/fashion-classification.png";
import universityAdmission from "./images/university-admission.png";
import costPerUnit from "./images/cost-per-unit.png";

export const featuredRepositories = [
  {
    title: "My Learning",
    description:
      "In this repository, I try to document some interesting topics that I learn. Currently it contains different topics about Machine Learning and Deep Learning, with easy to understand READMEs.",
    link: "https://github.com/hesanghasemi/MyLearning.git",
    image: study,
  },
  {
    field: "Machine Learning",
    title: "Breast Cancer Classification",
    description:
      "In this project, we try to train a machine to classify 2 types of cancer; Deadly or not. We use different features to help the machine better understand the corrolations.",
    link: "https://github.com/hesanghasemi/Breast_Cancer_Classification.git",
    image: breastCancer,
  },
  {
    field: "Machine Learning",
    title: "Fashion Class Classification",
    description:
      "In this project, we try to train a machine to distinguish different types of clothing. This machine can then be used to help a fashion company to understand what is people's taste of fashion nowadays through analyzing their social medias.",
    link: "https://github.com/hesanghasemi/Fashion_Class_Classification.git",
    image: fashionClass,
  },
  {
    field: "Machine Learning",
    title: "University Admission Prediction",
    description:
      "In this project, we try to predict a students chance of getting accepted at a university. The machine looks at different features like the university rating, the student's GRE scroe, Toefl score and etc.",
    link: "https://github.com/hesanghasemi/University_Admission_Prediction.git",
    image: universityAdmission,
  },
  {
    field: "Machine Learning",
    title: "Cost Per Unit Prediction",
    description:
      "In this project, we try to predict the manufacturing cost of a unit of product. The machine does this by looking at the cost of the product for different units.",
    link: "https://github.com/hesanghasemi/Cost_Per_Unit_Prediction.git",
    image: costPerUnit,
  },
];
