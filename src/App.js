import "./styles.css";
import { useState } from "react";

export default function App() {
  const supportSkills = [
    {
      name: "Vim And Vigor",
      job: "Scholar",
      tier: 4,
      effect: "HP Regen each turn",
      category: "HP Regen"
    },
    {
      name: "Saving Grace",
      job: "Cleric",
      tier: 4,
      effect: "Heal above max HP",
      category: "HP Regen"
    },
    {
      name: "Hale and Hearty",
      job: "Apothecary",
      tier: 2,
      effect: "+500 HP",
      category: "HP Regen"
    },
    {
      name: "Cover",
      job: "Warrior",
      tier: 1,
      effect: "Absorb dmg from near death",
      category: "Death"
    },
    {
      name: "Hang Tough",
      job: "Merchant",
      tier: 3,
      effect: "When not near death, survive lethal",
      category: "Death"
    },
    {
      name: "Encore",
      job: "Dancer",
      tier: 4,
      effect: "Once per battle, Revive with 25% HP",
      category: "Death"
    },
    {
      name: "Insult to Injury",
      job: "Thief",
      tier: 4,
      effect: "+1 turn to inflicted enemy debuffs",
      category: "Buffs & Debuffs"
    },
    {
      name: "The show goes on",
      job: "Dancer",
      tier: 1,
      effect: "+1 turn to buffs you grant",
      category: "Buffs & Debuffs"
    },
    {
      name: "Persistence",
      job: "Cleric",
      tier: 1,
      effect: "+1 turn to received buffs",
      category: "Buffs & Debuffs"
    },
    {
      name: "Resist Ailments",
      job: "Apothecary",
      tier: 3,
      effect: "Increased debuff resistance",
      category: "Buffs & Debuffs"
    },
    {
      name: "Divine Aura",
      job: "Starseer",
      tier: 4,
      effect: "Gain 25% chance of nullifying any damage taken",
      category: "Defense"
    },
    {
      name: "Intimidation",
      job: "Sorcerer",
      tier: 1,
      effect: "25% chance foes will begin battle with -Phy/Elm Defense debuff",
      category: "Buffs & Debuffs"
    },
    {
      name: "Dauntless",
      job: "Runelord",
      tier: 3,
      effect: "Gain +Phy/Elm Attack when debuffed status",
      category: "Buffs & Debuffs"
    },
    {
      name: "Second Wind",
      job: "Dancer",
      tier: 3,
      effect: "Regenerate SP each turn",
      category: "SP Regen"
    },
    {
      name: "SP Saver",
      job: "Merchant",
      tier: 4,
      effect: "Halves SP consumption",
      category: "SP Regen"
    },
    {
      name: "Heightened Healing",
      job: "Apothecary",
      tier: 4,
      effect: "Gain Extra 30% SP or HP when being healed",
      category: "SP Regen"
    },
    {
      name: "Inner Strength",
      job: "Cleric",
      tier: 2,
      effect: "+50 Max SP",
      category: "SP Regen"
    },
    {
      name: "Inspiration",
      job: "Apothecary",
      tier: 1,
      effect: "Gains 1% SP of Autoatk damage",
      category: "SP Regen"
    },
    {
      name: "SP Recovery",
      job: "Runelord",
      tier: 2,
      effect: "Gain 1% SP of Incoming damage",
      category: "SP Regen"
    },
    {
      name: "Surpassing Power",
      job: "Warrior",
      tier: 4,
      effect: "Max Dmg. raised to 99.999",
      category: "Damage"
    },
    {
      name: "Summon Strength",
      job: "Warrior",
      tier: 2,
      effect: "+50 Phys. Attack",
      category: "Damage"
    },
    {
      name: "Elemental Augmentation",
      job: "Scholar",
      tier: 2,
      effect: "+50 Elem. Attack",
      category: "Damage"
    },
    {
      name: "Fleetfoot",
      job: "Thief",
      tier: 2,
      effect: "+50 Speed",
      category: "Damage"
    },
    {
      name: "Eagle Eye",
      job: "Hunter",
      tier: 2,
      effect: "+50 Crit. Rate",
      category: "Damage"
    },
    {
      name: "BP Eater",
      job: "Starseer",
      tier: 3,
      effect: "Boosted skills deal additional damage",
      category: "Damage"
    },
    {
      name: "Elemental Edge",
      job: "Runelord",
      tier: 4,
      effect: "Augmented Elem. Atk&Def in battle",
      category: "Damage"
    },
    {
      name: "Stat Swap",
      job: "Runelord",
      tier: 1,
      effect: "Elem. Atk stat is swapped with Phys. Atk",
      category: "Damage"
    },
    {
      name: "Physical Prowess",
      job: "Warmaster",
      tier: 4,
      effect: "Augments Phys./Elem dmg. in battle",
      category: "Damage"
    },
    {
      name: "Fortitude",
      job: "Warmaster",
      tier: 3,
      effect: "Deal more damage the lower your HP is",
      category: "Damage"
    },
    {
      name: "Augmented Elements",
      job: "Sorcerer",
      tier: 4,
      effect: "Increases Elemental attacks damage",
      category: "Damage"
    },
    {
      name: "Elemental Aid",
      job: "Sorcerer",
      tier: 3,
      effect: "Elem. Attacks deal extra damage, but consume 2x SP",
      category: "Damage"
    },
    {
      name: "Stronger Strikes",
      job: "Sorcerer",
      tier: 2,
      effect: "Increase dmg. when striking a foe’s weak point",
      category: "Damage"
    },
    {
      name: "Endure",
      job: "Warrior",
      tier: 3,
      effect: "+Phys/+Elem Defense after being debuffed",
      category: "Defense"
    },
    {
      name: "Stalwart Defense",
      job: "Warmaster",
      tier: 2,
      effect: "+50 Phys. Defense",
      category: "Defense"
    },
    {
      name: "Incidental Attack",
      job: "Thief",
      tier: 1,
      effect: "50% chance Autoatk proc after using non-dmg skill",
      category: "Shield Break & Extra Turns"
    },
    {
      name: "Eye for an Eye",
      job: "Dancer",
      tier: 2,
      effect: "50% chance of Counteratk physical attacks",
      category: "Shield Break & Extra Turns"
    },
    {
      name: "Second Serving",
      job: "Hunter",
      tier: 3,
      effect: "50% chance 2x Autoatk proc",
      category: "Shield Break & Extra Turns"
    },
    {
      name: "Patience",
      job: "Hunter",
      tier: 4,
      effect: "25% chance of acting again at end of turn",
      category: "Shield Break & Extra Turns"
    },
    {
      name: "Grows on Trees",
      job: "Merchant",
      tier: 2,
      effect: "Additional money after battles",
      category: "Farming"
    },
    {
      name: "Heightened Senses",
      job: "Hunter",
      tier: 1,
      effect: "Increased chance of attacking first",
      category: "Farming"
    },
    {
      name: "Snatch",
      job: "Thief",
      tier: 3,
      effect: "Double loot when stealing or collecting",
      category: "Farming"
    },
    {
      name: "Hard Worker",
      job: "Starseer",
      tier: 1,
      effect: "Additional JP after battles",
      category: "Farming"
    },
    {
      name: "Extra Experience",
      job: "Warmaster",
      tier: 1,
      effect: "Additional EXP after battles",
      category: "Farming"
    },
    {
      name: "Boost-Start",
      job: "Starseer",
      tier: 2,
      effect: "+1 BP at start of battle",
      category: "BP"
    },
    {
      name: "Evil Ward",
      job: "Cleric",
      tier: 3,
      effect: "Increased flee success rate",
      category: "Running"
    },
    {
      name: "Evasive Maneuvers",
      job: "Scholar",
      tier: 1,
      effect: "Reduced random battle encounters",
      category: "Running"
    },
    {
      name: "Percipience",
      job: "Scholar",
      tier: 3,
      effect: "Prevents the party from being surprised",
      category: "Running"
    },
    {
      name: "Endless Items",
      job: "Merchant",
      tier: 1,
      effect: "25% Chance of not consuming an item",
      category: "Items"
    }
  ];

  const [tierFilter, setTierFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [jobFilter, setJobFilter] = useState(null);

  const tierOptions = ["1", "2", "3", "4"];
  const categoryOptions = [
    "HP Regen",
    "Death",
    "Buffs & Debuffs",
    "SP Regen",
    "Damage",
    "Shield Break & Extra Turns",
    "Farming",
    "BP",
    "Running",
    "Items"
  ];
  const jobOptions = [
    "Apothecary",
    "Cleric",
    "Dancer",
    "Hunter",
    "Merchant",
    "Runelord",
    "Scholar",
    "Starseer",
    "Sorcerer",
    "Thief",
    "Warrior",
    "Warmaster"
  ];

  const onTierFilterChange = (event) => {
    event.target.value === "Tier Filter"
      ? setTierFilter(null)
      : setTierFilter(event.target.value);
  };
  const onCategoryFilterChange = (event) => {
    event.target.value === "Category Filter"
      ? setCategoryFilter(null)
      : setCategoryFilter(event.target.value);
  };
  const onJobFilterChange = (event) => {
    event.target.value === "Job Filter"
      ? setJobFilter(null)
      : setJobFilter(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={onJobFilterChange} className="jobSelect">
        <option>Job Filter</option>
        {jobOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <select onChange={onTierFilterChange}>
        <option>Tier Filter</option>
        {tierOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <select onChange={onCategoryFilterChange}>
        <option>Category Filter</option>
        {categoryOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>

      <table>
        <thead>
          <tr className="headerRow">
            <td>Name</td>
            <td className="jobCol">Job</td>
            <td className="tierCol tierHeader">Tier</td>
            <td>Effect</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {supportSkills
            .filter((f) =>
              tierFilter ? f.tier === parseInt(tierFilter, 10) : true
            )
            .filter((f) =>
              categoryFilter ? f.category === categoryFilter : true
            )
            .filter((f) => (jobFilter ? f.job === jobFilter : true))
            .map((s, i) => (
              <tr key={i} className="skillRow">
                <td className="skillName">{s.name}</td>
                <td className="jobCol">{s.job}</td>
                <td className={`tierCol tier tier-${s.tier}`}>{s.tier}</td>
                <td>{s.effect}</td>
                <td>{s.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
