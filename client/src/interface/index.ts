export type MainPayload = {
  tweet: string;
};

export type ModelName =
  | "Select a Model..."
  | "Ada-Boost-Classifier"
  | "Bernoulli-NB"
  | "Linear-SVC"
  | "Logistic-Regression"
  | "Multinomial-NB"
  | "Passive-Aggressive-Classifier"
  | "Perceptron"
  | "Ridge-Classifier";

export type StatsPayload = MainPayload & {
  modelName: ModelName;
};
