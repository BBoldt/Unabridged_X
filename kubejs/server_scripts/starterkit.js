PlayerEvents.loggedIn(event => {
    let player = event.player;

    if (!player.persistentData.hasJoinedBefore) {
        player.persistentData.hasJoinedBefore = true;

        let items = [
            Item.of('nomadictents:mallet', '{Damage:0}'),
            'nomadictents:small_tepee',
            'minecraft:cyan_bed',
            'tconstruct:crafting_station',
            Item.of('sophisticatedbackpacks:backpack', '{borderColor:8606770,clothColor:8606770,contentsUuid:[I;292285786,370690146,-1510766799,1667672216],inventorySlots:27,renderInfo:{upgradeItems:[{Count:1b,id:"minecraft:air",tag:{}}]},upgradeSlots:1}'),
            Item.of('brewinandchewin:flaxen_cheese_wedge', 4),
            Item.of('minecraft:bread', 4),
            Item.of('brewinandchewin:jerky', 4),
            'suppsquared:copper_lantern'
        ];

        items.forEach(item => {
            player.give(item);
        });
    }
});
