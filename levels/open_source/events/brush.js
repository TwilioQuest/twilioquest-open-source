const { useFlameThrower } = require("./flamethrower");

// Which objective blocks the opening of a barrier?
const barrierPrereqMap = {
  "09_make_pr": ["partyShortcutBarriers", "forestShortcutBarriers"],
};

const doesBarrierHavePrereq = (barrierKey) =>
  Object.values(barrierPrereqMap).some((bariersWithPrereqs) =>
    bariersWithPrereqs.some(
      (barrierWithPrereq) => barrierWithPrereq === barrierKey
    )
  );

async function updateBrushState(event, world, worldState) {
  if (event.name === "playerDidInteract" && event.target.type === "brush") {
    // TODO: Temp disable for testing
    if (!worldState.flameUnlocked) {
      world.showNotification(
        `Hopefully the <em>The Flame of Open Source</em> can help me burn through this brush.`
      );
      return;
    }

    await useFlameThrower(world, event.target.key);

    // We need to ensure we've hidden the player's exclamation point.
    //
    // The player probably has the exclamation point popped since they're
    // in interaction range of the bushes.
    //
    // Once the bushes are destroyed, the player's exclamation point won't
    // be closed naturally.
    world.__internals.level.player.overlappingPoi.action("notOverlapping");
    world.__internals.level.player.inRangeObject = undefined;

    world.destroyEntities(event.target.key);
    world.destroyEntities(`${event.target.key}_flame`);
  }
}

function renderBrush(world, worldState) {}

module.exports = { renderBrush, updateBrushState };
