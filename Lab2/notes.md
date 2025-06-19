## The Problem:
    You had all three upgrades inside one .upgrade div, which made them stack vertically.

## The Solution:
    I separated them into three separate .upgrade divs inside the .container.

## How it works:
    .container has display: flex (which you already had in your CSS)
    Each .upgrade div becomes a flex item
    Flex items naturally arrange side by side (in a row)
    Each upgrade gets its own bordered box with the styling you defined