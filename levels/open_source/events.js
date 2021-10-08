const merge = require("lodash.merge");

const INITIAL_STATE = {
  leaderPermission: false,
  layers: { current: "upper", lastTriggerEntered: "layerTriggerUpper" },
};

const WORLD_STATE_KEY = "TQ_OPEN_SOURCE_WORLD_STATE";

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  // Hide all colliders blocked by the leader's permission
  if (worldState.leaderPermission) {
    world.hideEntities("colliderAfterLeader");

    world.showEntities("druidGuardLeaderAllowed");
    world.destroyEntities("druidGuardLeaderForbidden");
  }

  if (event.name === "triggerAreaWasEntered") {
    if (
      event.target.key === "guardForbiddenLeaderTrigger" &&
      !worldState.leaderPermission
    ) {
      world.startConversation("druid-guard-forbidden-leader", "druid2.png");
    }

    if (event.target.key === "guardForbiddenTrigger") {
      world.startConversation("druid-guard-forbidden", "druid2.png");
    }

    if (event.target.key === "upperSpawnTrigger") {
      worldState.layers.current = "upper";
      worldState.layers.lastTriggerEntered = "layerTriggerUpper";
    }

    if (event.target.key === "lowerSpawnTrigger") {
      worldState.layers.current = "lower";
      worldState.layers.lastTriggerEntered = "layerTriggerLower";
    }

    if (
      event.target.key === "layerTriggerUpper" ||
      event.target.key === "layerTriggerLower"
    ) {
      if (
        event.target.key === "layerTriggerUpper" &&
        worldState.layers.lastTriggerEntered === "layerTriggerLower"
      ) {
        worldState.layers.current = "upper";
      }

      if (
        event.target.key === "layerTriggerLower" &&
        worldState.layers.lastTriggerEntered === "layerTriggerUpper"
      ) {
        worldState.layers.current = "lower";
      }

      // track last entered entered trigger area
      worldState.layers.lastTriggerEntered = event.target.key;
    }
  }

  // show/hide layered objects
  if (worldState.layers.current === "lower") {
    world.hideEntities("upperLayer-colliders");
    world.showEntities("lowerLayer-colliders");

    world.forEachEntities("upperLayer-floor", (entity) => {
      // Set height to mapHeight so entity is always sorted above player
      entity.sprite.body.height = world.__internals.level.map.heightInPixels;
      // I'm not sure why we need to set this here.
      // All of these entities should have disableBody set already.
      entity.sprite.body.enable = false;
    });
  }

  if (worldState.layers.current === "upper") {
    world.showEntities("upperLayer-colliders");
    world.hideEntities("lowerLayer-colliders");

    world.forEachEntities("upperLayer-floor", (entity) => {
      // Set height to 0 so entity is always sorted below player
      entity.sprite.body.height = 0;
      // I'm not sure why we need to set this here.
      // All of these entities should have disableBody set already.
      entity.sprite.body.enable = false;
    });
  }

  world.setState(WORLD_STATE_KEY, worldState);
};
