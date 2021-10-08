module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestOpenSourceBrush: {
      fileName: "BurnableBrushAnim.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  events: {},
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestOpenSourceBrush",
      layers: [],
    },
    idleAnimations: {
      animations: {
        idle: 100,
      },
      minIdleTime: 1000,
      maxIdleTime: 3000,
    },
  },
};
