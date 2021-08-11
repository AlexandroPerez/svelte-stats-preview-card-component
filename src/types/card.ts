export type CardType = {
  /** Object with public path of the card images for mobile and desktop */
  imageSrc: {
    mobile: string;
    desktop: string;
  };
  /**
   * Title of the card. Will **highlight** text enclosed in double asterisks
   * like in markdown.
   * example:
   * Get **valuable insights** that help...
   */
  title: string;
  /** Card description */
  desc: string;
  /**
   * Array of string tuples for the stats.
   * Each tuple has: [quantity, description].
   * example:
   * [["10k", "companies"], ["314", "templates"]]
   */
  stats: [string, string][];
};
