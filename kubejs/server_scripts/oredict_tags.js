ServerEvents.recipes(event => {
    // Replace cheese-related inputs with forge:gems/cheese
    event.replaceInput({}, 'brewinandchewin:flaxen_cheese_wedge', '#forge:gems/cheese');
    event.replaceInput({}, 'refurbished_furniture:cheese', '#forge:gems/cheese');
    event.replaceInput({}, 'tconstruct:cheese_ingot', '#forge:gems/cheese');
    event.replaceInput({}, 'ad_astra:ice_shard', '#forge:gems/ice_shard');
});

// Tagging all cheese items
ServerEvents.tags('item', event => {
    event.get('forge:gems/cheese')
        .add([
            'ad_astra:cheese',
            'brewinandchewin:flaxen_cheese_wedge',
            'refurbished_furniture:cheese',
            'tconstruct:cheese_ingot'
        ]);

    event.get('forge:raw_materials/ice')
        .add([
            'ad_astra:ice_shard'
        ]);
});

ServerEvents.recipes(event => {
    // Add a new recipe that supports forge:gems/ice_shard
    event.custom({
        type: 'ad_astra:cryo_freezing',
        cookingtime: 60,
        energy: 40,
        ingredient: {
            tag: 'forge:raw_materials/ice' // Accepts any item tagged as an ice shard
        },
        result: {
            fluid: 'ad_astra:cryo_fuel',
            millibuckets: 25
        }
    });
});

ServerEvents.recipes(event => {
    event.custom({
        type: 'ad_astra:refining',
        cookingtime: 1,
        energy: 30,
        input: {
            ingredient: {
                tag: 'forge:oil' // Accepts any fluid tagged as #forge:oil
            },
            millibuckets: 5
        },
        result: {
            fluid: 'ad_astra:fuel',
            millibuckets: 5
        }
    });
});

ServerEvents.recipes(event => {
    // Replace gobber-related inputs with appropriate forge tags
    event.replaceInput({}, 'gobber2:gobber2_glob', '#forge:raw_materials/gobber');
    event.replaceInput({}, 'gobber2:gobber2_glob_nether', '#forge:raw_materials/gobber_nether');
    event.replaceInput({}, 'gobber2:gobber2_glob_end', '#forge:raw_materials/gobber_end');
});

// Tagging all raw gobber materials separately
ServerEvents.tags('item', event => {
    event.get('forge:raw_materials/gobber')
        .add([
            'gtceu:raw_gobber',
            'gobber2:gobber2_glob'
        ]);

    event.get('forge:raw_materials/gobber_nether')
        .add([
            'gtceu:raw_gobber_nether',
            'gobber2:gobber2_glob_nether'
        ]);

    event.get('forge:raw_materials/gobber_end')
        .add([
            'gtceu:raw_gobber_end',
            'gobber2:gobber2_glob_end'
        ]);
});

// Malum Compatibility: Ensure GTCEu Materials Work in Malum Recipes
ServerEvents.tags('item', event => {
    // Tagging raw materials so recipes from both mods work interchangeably
    event.get('forge:raw_materials/soulstone')
        .add([
            'malum:raw_soulstone',
            'gtceu:raw_soulstone'
        ]);

    event.get('forge:raw_materials/cthonic_gold')
        .add([
            'malum:cthonic_gold',
            'gtceu:cthonic_gold'
        ]);

    event.get('forge:gems/blazing_quartz')
        .add([
            'malum:blazing_quartz',
            'gtceu:blazing_quartz'
        ]);

    event.get('forge:gems/brilliant')
        .add([
            'malum:chunk_of_brilliance',
            'gtceu:brilliant'
        ]);
});

ServerEvents.recipes(event => {
    // Allow GTCEu versions to be used in Malum recipes
    event.replaceInput({}, 'malum:raw_soulstone', '#forge:raw_materials/soulstone');
    event.replaceInput({}, 'malum:chunk_of_brilliance', '#forge:gems/brilliant');
    event.replaceInput({}, 'malum:blazing_quartz', '#forge:gems/blazing_quartz');
    event.replaceInput({}, 'malum:cthonic_gold', '#forge:raw_materials/cthonic_gold');
});
