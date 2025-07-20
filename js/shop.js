const originalItems = [
    {
        productId: "laptop005",
        productName: "ASUS TUF Gaming1",
        productPrice: 13500.00,
        quantity: 1
    },
    {
        productId: "laptop006",
        productName: "ASUS Vivobook",
        productPrice: 9000.00,
        quantity: 1
    },
    {
        productId: "laptop009",
        productName: "Acer Aspire",
        productPrice: 9700.00,
        quantity: 1
    },
    {
        productId: "desk004",
        productName: "HPREFURBISHED Elite",
        productPrice: 2700.00,
        quantity: 1
    },
    {
        productId: "desk008",
        productName: "Armaggeddon Triton",
        productPrice: 800.00,
        quantity: 1
    },
    {
        productId: "desk009",
        productName: "Armaggeddon Aquadron",
        productPrice: 924.00,
        quantity: 1
    },
    {
        productId: "laptop001",
        productName: "Apple Macbook Pro",
        productPrice: 33000.00,
        quantity: 1
    },
    {
        productId: "laptop002",
        productName: "ASUS TUF Gaming2",
        productPrice: 34000.00,
        quantity: 1
    },
    {
        productId: "laptop004",
        productName: "MSI Thin",
        productPrice: 19000.00,
        quantity: 1
    },
    {
        productId: "desk006",
        productName: "HPREFURBISHED Elite2",
        productPrice: 2300.00,
        quantity: 1
    },
    {
        productId: "desk007",
        productName: "Dell Precision",
        productPrice: 4500.00,
        quantity: 1
    },
    {
        productId: "desk010",
        productName: "RefurbDELL OptiPlex",
        productPrice: 7700.00,
        quantity: 1
    },
    {
        productId: "laptop001",
        productName: "Apple Macbook Pro",
        productPrice: 33000.00,
        quantity: 1
    },
    {
        productId: "laptop002",
        productName: "ASUS TUF Gaming2",
        productPrice: 34000.00,
        quantity: 1
    },
    {
        productId: "laptop003",
        productName: "ASUS ROG Zephyrus",
        productPrice: 62000.00,
        quantity: 1
    },
    {
        productId: "laptop004",
        productName: "MSI Thin",
        productPrice: 19000.00,
        quantity: 1
    },
    {
        productId: "laptop005",
        productName: "ASUS TUF Gaming1",
        productPrice: 13500.00,
        quantity: 1
    },
    {
        productId: "laptop006",
        productName: "ASUS Vivobook",
        productPrice: 9000.00,
        quantity: 1
    },
    {
        productId: "laptop007",
        productName: "ASUS TUF Gaming3",
        productPrice: 14000.00,
        quantity: 1
    },
    {
        productId: "laptop008",
        productName: "ASUS ROG Strix",
        productPrice: 94000.00,
        quantity: 1
    },
    {
        productId: "laptop009",
        productName: "Acer Aspire",
        productPrice: 9700.00,
        quantity: 1
    },
    {
        productId: "laptop010",
        productName: "Apple Macbook Pro",
        productPrice: 74000.00,
        quantity: 1
    },
    {
        productId: "desk001",
        productName: "Apple iMAC",
        productPrice: 44000.00,
        quantity: 1
    },
    {
        productId: "desk002",
        productName: "ADMI Gaming",
        productPrice: 27000.00,
        quantity: 1
    },
    {
        productId: "desk003",
        productName: "STG Aubron Gaming",
        productPrice: 16000.00,
        quantity: 1
    }, 
    {
        productId: "desk004",
        productName: "HPREFURBISHED Elite",
        productPrice: 2700.00,
        quantity: 1
    },
    {
        productId: "desk005",
        productName: "PCBuilder",
        productPrice: 13900.00,
        quantity: 1
    },
    {
        productId: "desk006",
        productName: "HPREFURBISHED Elite2",
        productPrice: 2300.00,
        quantity: 1
    },
    {
        productId: "desk007",
        productName: "Dell Precision",
        productPrice: 4500.00,
        quantity: 1
    },
    {
        productId: "desk008",
        productName: "Armaggeddon Triton",
        productPrice: 800.00,
        quantity: 1
    },
    {
        productId: "desk009",
        productName: "Armaggeddon Aquadron",
        productPrice: 924.00,
        quantity: 1
    },
    {
        productId: "desk010",
        productName: "RefurbDELL OptiPlex",
        productPrice: 7700.00,
        quantity: 1
    },
    {
        productId: "emu001",
        productName: "Bluestack",
        productPrice: 202.00,
        quantity: 1
    },
    {
        productId: "emu002",
        productName: "GameLoop",
        productPrice: 922.00,
        quantity: 1
    },
    {
        productId: "emu003",
        productName: "NoxPlayer",
        productPrice: 500.00,
        quantity: 1
    },
    {
        productId: "emu004",
        productName: "MEmu Play",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "emu005",
        productName: "PCSX2",
        productPrice: 500.00,
        quantity: 1
    },
    {
        productId: "emu006",
        productName: "RPCS3",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "emu007",
        productName: "Citra",
        productPrice: 1700.00,
        quantity: 1
    },
    {
        productId: "emu008",
        productName: "PPSSPP",
        productPrice: 950.00,
        quantity: 1
    },
    {
        productId: "peri001",
        productName: "ASUS TUF",
        productPrice: 4000.00,
        quantity: 1
    },
    {
        productId: "peri002",
        productName: "LG UltraGear",
        productPrice: 3000.00,
        quantity: 1
    },
    {
        productId: "peri003",
        productName: "Razer Basilisk Mouse",
        productPrice: 3800.00,
        quantity: 1
    },
    {
        productId: "peri004",
        productName: "Redragon M612-RGB Mouse",
        productPrice: 230.00,
        quantity: 1
    },
    {
        productId: "peri005",
        productName: "Logitech G502 Mouse",
        productPrice: 2000.00,
        quantity: 1
    },
    {
        productId: "peri006",
        productName: "ASUS ROG Delta",
        productPrice: 3000.00,
        quantity: 1
    },
    {
        productId: "peri007",
        productName: "Corsair VIRTUOSO-RGB",
        productPrice: 4600.00,
        quantity: 1
    },
    {
        productId: "peri008",
        productName: "Logitech G733",
        productPrice: 2800.00,
        quantity: 1
    },
    {
        productId: "peri009",
        productName: "Razer Deathstalker",
        productPrice: 6000.00,
        quantity: 1
    },
    {
        productId: "peri010",
        productName: "Redragon Kumara 87",
        productPrice: 770.00,
        quantity: 1
    },
    {
        productId: "peri011",
        productName: "MOFII wireless",
        productPrice: 840.00,
        quantity: 1
    },
    {
        productId: "game003",
        productName: "Fornite",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "game004",
        productName: "Roblox",
        productPrice: 200.00,
        quantity: 1
    },
    {
        productId: "game009",
        productName: "Apex Legends",
        productPrice: 370.00,
        quantity: 1
    },
    {
        productId: "retro004",
        productName: "Street Fighter 2",
        productPrice: 360.00,
        quantity: 1
    },
    {
        productId: "retro005",
        productName: "Ocarina of Time",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "retro008",
        productName: "A Link to The Past",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "game001",
        productName: "Counter-Strike 2",
        productPrice: 400.00,
        quantity: 1
    },
    {
        productId: "game005",
        productName: "Sims 4",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "game006",
        productName: "League of Legends",
        productPrice: 450.00,
        quantity: 1
    },
    {
        productId: "retro002",
        productName: "Final Fantasy 7",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "retro009",
        productName: "Space Invaders",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "retro010",
        productName: "Resident Evil",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "retro001",
        productName: "Sonic the Hedgehog 2",
        productPrice: 600.00,
        quantity: 1
    },
    {
        productId: "retro002",
        productName: "Final Fantasy 7",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "retro003",
        productName: "Doom",
        productPrice: 450.00,
        quantity: 1
    },
    {
        productId: "retro004",
        productName: "Street Fighter 2",
        productPrice: 360.00,
        quantity: 1
    },
    {
        productId: "retro005",
        productName: "Ocarina of Time",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "retro006",
        productName: "Super Mario Kart",
        productPrice: 500.00,
        quantity: 1
    },
    {
        productId: "retro007",
        productName: "Donkey Kong",
        productPrice: 500.00,
        quantity: 1
    },
    {
        productId: "retro008",
        productName: "A Link to The Past",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "retro009",
        productName: "Space Invaders",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "retro010",
        productName: "Resident Evil",
        productPrice: 700.00,
        quantity: 1
    },
    {
        productId: "game001",
        productName: "Counter-Strike 2",
        productPrice: 400.00,
        quantity: 1
    },
    {
        productId: "game002",
        productName: "Minecraft",
        productPrice: 500.00,
        quantity: 1
    },
    {
        productId: "game003",
        productName: "Fortnite",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "game004",
        productName: "Roblox",
        productPrice: 200.00,
        quantity: 1
    },
    {
        productId: "game005",
        productName: "Sims 4",
        productPrice: 350.00,
        quantity: 1
    },
    {
        productId: "game006",
        productName: "League of Legends",
        productPrice: 450.00,
        quantity: 1
    },
    {
        productId: "game007",
        productName: "Dota 2",
        productPrice: 600.00,
        quantity: 1
    },
    {
        productId: "game008",
        productName: "Valorant",
        productPrice: 450.00,
        quantity: 1
    },
    {
        productId: "game009",
        productName: "Apex Legends",
        productPrice: 370.00,
        quantity: 1
    },
    {
        productId: "game010",
        productName: "Baldur's Gate 3",
        productPrice: 500.00,
        quantity: 1
    }

];

const shoppingCart = originalItems.map(item => ({
    id: item.productId,
    name: item.productName,
    price: item.productPrice,
    quantity: item.quantity || 1
}));

if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    if (typeof window.updateCartIconCount === 'function') {
        window.updateCartIconCount(shoppingCart);
    }
}