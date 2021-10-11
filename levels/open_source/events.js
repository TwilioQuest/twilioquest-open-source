const merge = require("lodash.merge");
const { updateBrushState, renderBrush } = require("./events/brush");
const { renderFlames } = require("./events/flames");
const { updateLayerState, renderLayers } = require("./events/layers");

const INITIAL_STATE = {
  leaderPermission: false,
  flameUnlocked: false,
  finishedParty: false,
  showedOpenBridge: false,
  layers: { current: "upper", lastTriggerEntered: "layerTriggerUpper" },
  brush: {
    brushBurned: [],
  },
};

const WORLD_STATE_KEY = "TQ_OPEN_SOURCE_WORLD_STATE";
const FLAME_UNLOCK_MISSION_NAME = "06_make_edits";

module.exports = async function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (
    event.objective === FLAME_UNLOCK_MISSION_NAME &&
    !worldState.flameUnlocked
  ) {
    worldState.flameUnlocked = true;
  }

  // Hide all colliders blocked by the leader's permission
  if (worldState.leaderPermission) {
    world.hideEntities("colliderAfterLeader");

    world.showEntities("druidGuardLeaderAllowed");
    world.destroyEntities("druidGuardLeaderForbidden");
  }

  if (event.name === "triggerAreaWasEntered") {
    if (event.target.key === "lookAtLeader" && !worldState.leaderPermission) {
      world.forEachEntities("leaderViewpoint", async (viewpoint) => {
        world.disablePlayerMovement();

        await world.tweenCameraToPosition({
          x: viewpoint.startX,
          y: viewpoint.startY,
        });

        world.showNotification(`
          I should talk to the village leader first thing!
        `);

        await world.wait(3000);
        await world.tweenCameraToPlayer();

        world.enablePlayerMovement();
      });
    }

    if (
      event.target.key === "guardForbiddenLeaderTrigger" &&
      !worldState.leaderPermission
    ) {
      world.startConversation("druid-guard-forbidden-leader", "druid2.png");
    }

    if (event.target.key === "guardForbiddenTrigger") {
      world.startConversation("druid-guard-forbidden", "druid2.png");
    }

    if (event.target.key === "afterPartyTrigger") {
      worldState.finishedParty = true;
    }

    if (
      event.target.key === "guardPartyForbiddenTrigger" &&
      !worldState.finishedParty
    ) {
      world.startConversation("druid-guard-forbidden", "druid2.png");
    }
  }

  if (event.name === "conversationDidEnd") {
    if (worldState.leaderPermission && !worldState.showedOpenBridge) {
      world.forEachEntities("bridgeViewpoint", async (viewpoint) => {
        world.disablePlayerMovement();

        await world.tweenCameraToPosition({
          x: viewpoint.startX,
          y: viewpoint.startY,
        });

        world.showNotification(`
          The way down into the forest is open now!
        `);

        await world.wait(3000);
        await world.tweenCameraToPlayer();

        world.enablePlayerMovement();
        worldState.showedOpenBridge = true;
      });
    }
  }

  if (worldState.finishedParty) {
    world.destroyEntities("druidGuardPartyForbidden");
    world.showEntities("druidGuardPartyAllowed");
    world.destroyEntities("colliderAfterParty");
  }

  updateLayerState(event, world, worldState);
  await updateBrushState(event, world, worldState);

  renderLayers(world, worldState);
  renderBrush(world, worldState);
  renderFlames(world, worldState);

  world.setState(WORLD_STATE_KEY, worldState);
};
