ServerEvents.recipes(event => {
    event.remove({ output: 'brewinandchewin:flaxen_cheese_wheel' })

    event.shaped(
        Item.of('brewinandchewin:flaxen_cheese_wheel', 1),
        [
            'CCC',
            ' C '
        ],
        {
            C: '#forge:gems/cheese'
        }
    )
});