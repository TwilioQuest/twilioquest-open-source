function useFlameThrower(world, targetKey) {
  const { game, player } = world.__internals.level;
  let sprite, animation;

  if (player.sprite.directionFrame === player.directionFrames.UP) {
    sprite = game.add.sprite(
      player.sprite.x,
      player.sprite.y - 32,
      "twilioQuestFlameThrowerUpDown"
    );
    animation = sprite.animations.add(
      "spray",
      [
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 58, 57, 56, 55, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63, 32,
      ],
      8
    );
  }

  if (player.sprite.directionFrame === player.directionFrames.DOWN) {
    sprite = game.add.sprite(
      player.sprite.x,
      player.sprite.y,
      "twilioQuestFlameThrowerUpDown"
    );
    animation = sprite.animations.add(
      "spray",
      [
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 41, 40, 39, 38, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 32,
      ],
      8
    );
  }

  if (player.sprite.directionFrame === player.directionFrames.LEFT) {
    sprite = game.add.sprite(
      player.sprite.x - 32,
      player.sprite.y,
      "twilioQuestFlameThrowerLeftRight"
    );
    animation = sprite.animations.add(
      "spray",
      [
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 58, 57, 56, 55, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63, 32,
      ],
      8
    );
  }

  if (player.sprite.directionFrame === player.directionFrames.RIGHT) {
    sprite = game.add.sprite(
      player.sprite.x,
      player.sprite.y,
      "twilioQuestFlameThrowerLeftRight"
    );
    animation = sprite.animations.add(
      "spray",
      [
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 41, 40, 39, 38, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 32,
      ],
      8
    );
  }

  const TOTAL_ANIMATION_PLAY_TIME = 2000;

  return new Promise((resolve) => {
    animation.onComplete.addOnce(() => {
      world.stopUsingTool();
      resolve();
    });

    setTimeout(() => {
      world.showEntities(
        ({ instance }) =>
          instance.key === `${targetKey}_flame` && instance.stage === "1"
      );
    }, 400);
    setTimeout(() => {
      world.showEntities(
        ({ instance }) =>
          instance.key === `${targetKey}_flame` && instance.stage === "2"
      );
    }, 800);
    setTimeout(() => {
      world.showEntities(
        ({ instance }) =>
          instance.key === `${targetKey}_flame` && instance.stage === "3"
      );
    }, 1200);

    world.useTool("flame_thrower");
    sprite.animations.play("spray");
  });
}

module.exports = { useFlameThrower };
