const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    idle: {
      frames: [
        0, 0, 0, 0, 0, 0
      ],
      frameRate: 6,
    },
    takeBreath: {
        frames: [
            0, 1, 2, 3
        ],
        frameRate: 6
    },
    blink: {
        frames: [
            18, 19, 18
        ],
        frameRate: 6
    },
    shiftRightAndBack: {
        frames: [
            6, 7, 8, 8, 8, 8,       // shift right and stand
            8, 8, 8, 8, 8, 8,       // stand while right shifted
            8, 8, 8, 8, 8, 8,       // stand while right shifted
            9, 10, 11, 0, 0, 0      // shift back and stand
        ],
        frameRate: 6
    },
    shiftLeftAndBack: {
        frames: [
            12, 13, 14, 14, 14,     // shift left and stand
            14, 14, 14, 14, 14,     // stand while left shifted
            14, 14, 14, 14, 14,     // stand while left shifted
            15, 16, 17, 0, 0, 0     // shift back and stand
        ],
        frameRate: 6
    }
  },
  spriteSheets: {
    NPC_Daizen: {
      fileName: "NPC_Daizen.png",
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "NPC_Daizen",
      layers: [],
    },
    idleAnimations: {
      animations: {
        idle: 50,
        blink: 30,
        takeBreath: 10,
        shiftRightAndBack: 5,
        shiftLeftAndBack: 5
      },
      shouldCycle: true,
      minIdleTime: 2000,
      maxIdleTime: 5000,
    },
  },
};