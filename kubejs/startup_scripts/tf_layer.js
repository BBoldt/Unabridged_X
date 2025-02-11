GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('twilight_forest_layer')
        .targets('#minecraft:stone_ore_replaceables')
        .dimensions('twilightforest:twilight_forest');
});