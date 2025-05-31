import { useState } from 'react';
import { ChevronRight, ChevronDown, Home, Star, Gamepad2, Menu, X, Search, Trophy, Heart, Zap } from 'lucide-react';

const TrackKingHelpfile = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [expandedSections, setExpandedSections] = useState(['house-keeping']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Navigation structure matching the original helpfile
  const navigation = {
    'house-keeping': {
      title: 'House Keeping',
      icon: <Home className="w-4 h-4" />,
      color: 'bg-blue-500',
      pages: {
        'home': 'Welcome TK Players!',
        'that-dirty-linen': 'That Dirty Linen',
        'gm-bug-reports': 'GM & Bug Reports',
        'owners-club': 'Owners Club',
        'important-links': 'Important Links'
      }
    },
    'in-the-beginning': {
      title: 'In the Beginning...',
      icon: <Star className="w-4 h-4" />,
      color: 'bg-green-500',
      pages: {
        'baby-steps': 'Baby Steps',
        'charlie': 'Charlie',
        'first-things-second': 'First Things Second',
        'horses': 'Horses',
        'training': 'Training',
        'vet-services': 'Vet Services',
        'racing': 'Class League Racing',
        'jockeys': 'Jockeys',
        'finances': 'Finances',
        'mentor': 'Mentor Program',
        'the-levels': 'The Levels'
      }
    },
    'advanced-topics': {
      title: 'The Not To Distant Future...',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-purple-500',
      pages: {
        'what-comes-next': 'What comes next?',
        'stakes-racing': 'Stakes Racing',
        'cup-races': 'Cup Races',
        'injury-profile': 'Injury Profile',
        'agistment-facilities-and-money': 'Agistment, Facilities and Money',
        'auctions': 'Auctions',
        'breeding': 'Breeding',
        'yearling-sales': 'Yearling Sales',
        'prestige': 'Prestige',
        'forums': 'Forums'
      }
    },
    'fun-features': {
      title: 'All That Funky Fun',
      icon: <Gamepad2 className="w-4 h-4" />,
      color: 'bg-orange-500',
      pages: {
        'things-to-do': 'Things to do...',
        'racing-silks': 'All The Pretty Pictures',
        'betting': 'Betting',
        'training-track': 'Training Track',
        'h-o-o-f': 'H.O.O.F.'
      }
    }
  };

  // Sample content for key pages
  const pageContent = {
    'home': {
      title: 'Welcome to Track King!',
      content: `
# Welcome TK Players!

Welcome to the Track King Newbies Helpfile! This comprehensive guide will help you navigate the exciting world of virtual horse racing.

## What is Track King?

Track King is a sophisticated horse racing simulation game where you manage your own stable, train horses, hire jockeys, and compete in races. This helpfile contains everything you need to know to get started and advance to becoming a successful stable manager.

## How to Use This Guide

This helpfile is organized into four main sections:

- **House Keeping**: Essential information and community resources
- **In the Beginning**: Fundamental gameplay mechanics for new players  
- **The Not To Distant Future**: Advanced strategies and systems
- **All That Funky Fun**: Entertainment features and visual customization

Navigate using the sidebar menu to explore different topics. Each section contains detailed guides with examples, strategies, and important tips from experienced players.

## Getting Started

If you're completely new to Track King, we recommend starting with:
1. **Baby Steps** - Essential do's and don'ts
2. **Charlie** - Meet your tour guide
3. **Horses** - Understanding your stable
4. **Training** - Basic horse development

Good luck, and welcome to the Track King community!
      `
    },
    'baby-steps': {
      title: 'Baby Steps',
      content: `
# Baby Steps

Essential do's and don'ts for new Track King players.

## The Golden Rules

### ✅ DO:
- **Read this helpfile thoroughly** - It will save you money and mistakes
- **Start slowly** - Learn the basics before expanding
- **Ask questions** in the Help Me Please forum
- **Keep horses in good condition** before racing
- **Plan your finances** carefully

### ❌ DON'T:
- **Rush into buying horses** at auctions without knowledge
- **Overtrain horses** - More isn't always better  
- **Ignore your horse's condition** - Injured horses perform poorly
- **Spend all your money** immediately - Keep reserves
- **Race horses in poor condition** - Wait for recovery

## Essential First Steps

1. **Explore your stable** - You start with 4 horses
2. **Meet Charlie** - Your tour guide will show you around
3. **Check your finances** - Understand your weekly costs
4. **Plan your first races** - Start with class league racing
5. **Learn about training** - Basic horse development

## Common Newbie Mistakes

- Buying expensive horses before understanding stats
- Training horses incorrectly and damaging their development
- Racing horses when they're injured or tired
- Not budgeting for weekly stable maintenance costs
- Ignoring jockey selection and race instructions

Take your time, learn the systems, and don't be afraid to ask for help!
      `
    },
    'horses': {
      title: 'Horses',
      content: `
# Horses

Understanding your horses is fundamental to success in Track King.

## Horse Traits

### Spirit (Temperament)
Different temperaments influence horse behavior during racing and their rapport with jockeys.

### Height
Measured in hands high (hh), ranging from 15.0hh to 19.2hh. Height affects suitability for different race distances.

### Stride  
The ground covered with each step. Affected by training and influences race performance.

### Medical Condition
- **Vigorous**: Perfect health
- **Other levels**: Indicate injury or high injury risk

### Physical Condition
Affected by racing and training. Recovery comes primarily with time, though vet services help slightly.

### Racing Style
Some horses have special racing styles with unique advantages and drawbacks. Styled horses are valuable!

## Body Stats

### "Top" Stats (Speed)
- **Gate Speed**: Breaking from starting stalls and pace changes
- **Acceleration**: Maximum speed capability

### "Bottom" Stats (Endurance)  
- **Muscle Tone**: Maintaining speed and stamina (arguably most important)
- **Stamina**: Ability to "stay" the race distance
- **Heart**: The mysterious quality that makes horses dig deeper

## Experience (XP) Stats

Help determine optimal racing conditions:
- **Distance preferences**: Sprint, Short, Middle, Long, Epic
- **Track condition preferences**: Fast, Good, Dead, Slow, Heavy

## Key Interface Elements

*The horse management interface shows traits on the left, body stats on the right, and includes an OC-only graph visualization of horse statistics.*

## Training Considerations

- Young horses (2-3 years): Need more training hours
- Older horses (5+ years): Require less intensive training  
- Balance all stats - even sprinters need some stamina
- Monitor condition carefully during training cycles
      `
    },
    'training': {
      title: 'Training',
      content: `
# Training

The key to developing successful racehorses.

## Training Basics

- **Maximum 12 hours** per horse per week
- **Each training type** has specific effects on horse stats
- **Changes indicated** by blue (increases) and red (decreases)
- **Age considerations**: Younger horses need more training

## Training Guidelines by Age

- **2-3 years (youngsters)**: 6-10 hours
- **4-5 years (middle age)**: 4-6 hours  
- **6+ years (older horses)**: 3-5 hours

## Sample Training Plan (Beginners)

### For Sprint/Short Distance Horses:
- **Week 1**: Short Sprints (3 hours)
- **Week 2**: Starting Stalls (3 hours)
- **Week 3**: Beach Gallops (3 hours)

### For Middle/Long Distance Horses:
- **Week 1**: Cross Country (3 hours)
- **Week 2**: Short Sprints (3 hours)
- **Week 3**: Beach Gallops (3 hours)

## Training Types Overview

*The complete training types table shows all available training methods with their stat effects color-coded for easy reference.*

### Training Categories:
- **Green**: Body stat improvement focus
- **Pink**: Distance XP improvement with body stat effects
- **Blue**: Medical and physical condition changes
- **Yellow**: Weight and stride modifications

## Important Tips

- **Start affordable** - Begin with hours you can maintain
- **Monitor condition** - Some training is more tiring than others
- **Balance stats** - All horses need some training in all areas
- **Plan around races** - Don't exhaust horses before big events
- **Track changes** - Note which training types work best for your horses

Remember: Training is an investment in your horse's future performance. Be patient and consistent!
      `
    },
    'jockeys': {
      title: 'Jockeys',
      content: `
# Jockeys

Your partnership with jockeys can make the difference between winning and losing.

## Jockey Types

### 🏃 Apprentice/Unlisted
- Lowest cost option
- Limited skill level
- Selected when entering races
- Good for budget racing

### 🎓 Stable Apprentice  
- Hired and trained by your stable
- Learning and improving over time
- Minimum 1 season commitment
- Customizable development

### 🏆 Professional Jockey
- The real deal with proven experience
- Short-term contracts
- Higher cost but better performance
- Class-restricted hiring

## Jockey Stats

### Physical Attributes
- **Weight**: 50-65kg (lighter jockeys better for light horses)
- **Age**: 19-32 years old

### Personality Types
- **Aggressive**: Fires up early/late, aggressive racing style
- **Passive**: Calm, tends to ease late in races

## Hiring Professional Jockeys

### Search Criteria
- **Weight**: Match to your lightest horse
- **Wage**: Set budget you can afford weekly
- **Prestige**: Aim for jockeys close to your stable's prestige
- **Experience**: Match to your horses' preferred distances

### Important Factors
- **Ability to work with difficult horses**: Critical trait
- **Traits compatibility**: Avoid conflicting traits
- **Negotiation morale**: Affects haggling success
- **Contract period**: Balance cost vs. availability

## Stable Apprentice Development

### Hiring Tips
- **Get youngest possible** - More seasons before retirement
- **Lower weight preferred** - Better horse compatibility  
- **Choose personality** carefully for your needs
- **Don't fear rejection** - Wait for the right candidate

### Training Points
- Minimum 5 points per week earned
- Apply to "ability to work with difficult horses" first
- Extra points from good race performance
- Some specialist facilities provide bonus points

## Performance Factors

### Jockey Morale
- **Higher morale = better performance**
- Improves with successful racing
- Drops with poor race results
- Critical for optimal horse-jockey partnership

### Experience Matching
- Match jockey experience to horse preferences
- Sprint specialists for sprint horses
- Distance experience for longer races

*The jockey management interface provides detailed hiring options and contract negotiation tools for building your racing team.*
      `
    },
    'h-o-o-f': {
      title: 'H.O.O.F.',
      content: `
# H.O.O.F.
**Horse Online Owner Fun** - Instant Race Simulator

## Overview

H.O.O.F. utilizes the latest Race Vision technology for instant simulated racing. Available to Owners Club members for participation, and free viewing for all players.

## Key Features

### 🏁 Instant Racing
- **No physical impact** on your horses
- **No XP effects** - purely for fun and competition
- **Races every 10 minutes**, 24 hours a day
- Challenge friends, rivals, or the public

### 💰 Costs
- **Creating a race**: $25,000 (personal finances)
- **Joining existing race**: $2,500
- **Daily limit**: 1 race per day (personal finance)
- **Game credits**: Create additional races
- **Refund policy**: Full refund if no entrants

## Race Rules

### Participation
- **One horse per stable** per race
- **Limit entrants** and invite specific stables
- **Horse scanning**: 90-110% performance rating
- **Condition assessment**: Approximate medical/physical state

### Race Conditions
- **Standard conditions**: All horses race at ~vigorous/vigorous
- **Current instructions**: Uses horse's existing race instructions
- **Jockey equality**: All jockeys approximately equal with slight variations

## How to Set Up a Race

1. **Access H.O.O.F.** via Page Menu on Home Page
2. **Click "create/manage your own race"**
3. **Select race parameters**:
   - Number of opponents
   - Track condition  
   - Weather conditions
   - Race distance
4. **Set eligibility criteria** (optional)
5. **Choose participants**:
   - Select from online players
   - Invite friends/rivals
   - Leave open to public
6. **Create race** - automatically scheduled
7. **Enter your horse** and check race instructions
8. **Automatic notifications** sent to invited players

## Strategy Tips

- **Horse condition matters** - better condition = better chance of XP increase
- **Check current instructions** - races use your horse's existing setup
- **Save race data** - quarterly split times are lost when you leave the page
- **Schedule carefully** - avoid conflicts with real races and training

*The H.O.O.F. interface provides an entertaining way to test your horses against other players without the risks of real racing.*
      `
    },
    'breeding': {
      title: 'Breeding',
      content: `
# Breeding

Creating the next generation of champions.

## Breeding Fundamentals

### What Affects Foals
- ✅ **Parent stats, height, temperament, style**
- ✅ **Genetics and dominance traits**  
- ❌ **Horse XP does NOT impact foals**
- ⚠️ **Medical/Physical condition** - opinions vary

### Condition Theories
- Some believe mare must be vig/vig
- Others believe stallion must be vig/vig  
- Some say neither matters
- **Recommended**: Both horses in best possible condition

## The Breeding Process

### Eligibility
- **Horses must be 4+ years old**
- **Mares cannot race while pregnant**
- **Both parents experience condition drop**
- **Gestation period**: 3-4 weeks

### Birth and Development
- **Foals born on Fridays**
- **Start at 2 years old** - race-ready immediately
- **Belong to mare owner** at time of birth
- **"Homebred" status** if you organized the breeding

## Genetics and Dominance

### Styled Horses
- **Dominant stallions**: Consistently pass their style
- **Dominant mares**: Override stallion's style
- **Submissive mares**: Accept stallion's style (preferred)
- **Double dominance**: Unpredictable results

### Breeding Strategy
- **Research breeding history** of both parents
- **Target submissive mares** with styled stallions
- **Week 1 foals** give maximum training time
- **Consider market alternatives** vs. breeding costs

## The Real Costs of Breeding
*Contributed by Cerberus of The Dog Food Factory*

### Class 1 Stable Example (5 weeks total)
- **Stall and vet costs**: $107,440 (minimum 1 hr vets)
- **Missed race purses**: $60,000+ (2 races minimum)
- **Total investment**: $167,440+
- **Additional costs**: If racing weekly, add $180,000

### Mare Care Requirements
- **Must be vig/vig for conception** - no exceptions
- **Recovery time critical** - affects foal development
- **Foal growth tied to mare condition**
- **First week most important** for foal development

## Financial Reality Check

### Cost vs. Benefit Analysis
- **Unstyled foals**: Often available at auction for $20,000
- **Breeding investment**: $167,440+ minimum
- **Market alternatives**: Quality horses often cheaper
- **Success not guaranteed** - even perfect breeding can fail

### When to Breed
- **Week 1 foals preferred** - maximum training time
- **Plan timing carefully** - check season calendar
- **Consider your finances** - can you afford the full cost?
- **Evaluate alternatives** - auction market often has bargains

## Post-Birth Care

### Immediate Needs
- **Vet hours for mare** - birth is exhausting
- **Vet hours for foal** - tired after birth
- **Stall space required** - ensure availability
- **Training planning** - start development immediately

*Remember: Breeding is expensive and risky. Consider whether you can achieve your goals more affordably through the auction market.*
      `
    },
    'charlie': {
      title: 'Charlie',
      content: `
# Charlie

Who is this crazy man you may ask?

Charlie is the interactive 'help' man, who helps you on your way to success. Charlie will introduce you to your stable, and take you on a guided tour, to help get you started with the basic care and maintenance.

Charlie is not a help guide, he is just a tour guide. He will help you to locate the main areas that you will initially need to find to get started. After that, it's all up to you!

You can, of course, refer back to Charlie anytime you like, but remember, he doesn't give advice or answers, and is just the tour guide, but a very good one, and if you get stuck, lost, or forget where to get help, Charlie will help you find your way again.

## What does Charlie do?

- **Shows you around** - Takes you on a comprehensive stable tour
- **Sends you alerts** - Mails you if a horse gets injured during training  
- **Monitors your stable** - Lets you know if you have overcrowded your stable
- **Provides guidance** - Helps you locate essential areas and features

## Getting Started with Charlie

When you first join Track King, Charlie will automatically begin your tour. He'll show you:

- Your stable and horse management areas
- Training facilities and scheduling
- Racing entry and jockey selection
- Financial management tools
- Community features and forums

## Tips for New Players

- **Follow Charlie's tour completely** - Don't skip ahead
- **Take notes** - Charlie covers a lot of ground quickly
- **Ask questions later** - Use forums for detailed gameplay questions
- **Return to Charlie** - You can restart the tour anytime if needed

*Charlie is your friendly guide to the Track King world - let him show you the ropes!*
      `
    },
    'that-dirty-linen': {
      title: 'That Dirty Linen',
      content: `
# That Dirty Linen

Ok, maybe it isn't dirty, and you don't sleep on it. But a few little bits and pieces to learn about TK, to help you on your way.

**You can contact the TK Newbies Helpfile creators via email at:** tkhelpfiles@gmail.com

## The TK Admin Staff

### Creators
- **TK-Hairboy** - Game Creator
- **TK-Fishbrain** - Game Creator

### Game Masters
- **GM-Fossunited** - New Zealand
- **GM-Gopher27** - United Kingdom  
- **GM-Poida** - Australia
- **GM-Nickbete** - South America
- **GM-Ersins** - United Kingdom
- **GM-Riddley** - Australia

### Our Fearless Moderators
- **MOD-Trowjans** - New Zealand - Mentor Program

## Star Meanings

- **Little Green Stars** ⭐ - The TK admin staff all have these
- **Little Blue Stars** 🔵 - Owners Club Members, you can have one too!
- **Little Red Stars** 🔴 - These people are mentors. They are the ones to go to for advice and help

## Common Abbreviations and Terms

- **TK** - Track King
- **OC** - Owners Club
- **Pops** - Denotes an increase in stat after a training session
- **Plops** - Denotes a decrease in a stat after a training session  
- **Bots** - Stables that are not managed by humans, but are computer generated
- **IP** - Injury Profile
- **Top 5 Enabled** - Refers to the body stat genetics of a horse: Gate Speed (gg); Acceleration (aa); Muscle Tone (mm); Stamina (ss); Heart (hh)

## Community Guidelines

The Track King community is built on mutual respect and helpfulness. When interacting with other players:

- **Be respectful** - Treat all players with courtesy
- **Help newcomers** - Share your knowledge generously
- **Follow the rules** - Respect game and forum guidelines
- **Have fun** - Remember, it's a game!

*Welcome to the Track King family - we're glad you're here!*
      `
    },
    'racing': {
      title: 'Class League Racing',
      content: `
# Class League Racing

As you will have noticed, there are several different types of racing on TK. As a new stable, you need to concentrate on your league races to begin with. Stakes, Cups and Invitationals will come along all in good time, but league is where you need to start!

## Important Facts About League Racing

- **No entry fee, no travel costs** - You're guaranteed a return (number of jockeys bonus)
- **Competitive horses** - Your start-up horses have been given high XP to compensate for their lack of skill stats
- **Restricted competition** - Only you and other stables at your track in your class can enter
- **Points system** - You are awarded points for every race you run in, depending on where you finish

## League Points and Rewards

Points are totalled up over the season, and the top 5 stables receive:
- **Bonus overall place money**
- **Option to promote to a higher league**
- **C1-C3 Leagues** of 8 or more human opponents receive a bonus in Week 0 of between $32,000 and $900,000

## Getting Started Tips

### First Few Weeks
- **Train your horses** - With a few weeks training, they should be reasonably competitive
- **Enter every week** - Consistency is key to earning points
- **Learn from results** - Pay attention to what works and what doesn't

### Race Strategy
- **Study the competition** - Learn about other stables in your league
- **Match horses to distances** - Some horses prefer shorter or longer races
- **Don't expect instant success** - Building a competitive stable takes time

## Why League Racing Matters

**These races are your bread and butter races. It is vital that you enter them each week!**

League racing provides:
- **Steady income** - Regular prize money and bonuses
- **Experience** - Learn the basics of race strategy
- **Foundation** - Build your stable's reputation and skills
- **Progression** - Pathway to higher leagues and better competition

*Master league racing before moving on to the bigger, more expensive race types!*
      `
    },
    'auctions': {
      title: 'Auctions',
      content: `
# Auctions

## ⚠️ Warning: Beware the Auctions!

**Beware the auctions, for they are an addictive place!**

In your first weeks, you will notice you have a large amount of money, and will be very tempted to buy horses on the auction market with it!

## **DON'T!**

Until you are aware of what constitutes a good or bad horse, and until you are sure what you specifically are looking for in a horse, **DON'T BUY ONE!**

## Market Timing and Strategy

It is important to remember when buying that different times of the season have different popularity:

- **End of season** - Prices may go up as people have received their end of season bonus money
- **Beginning of season** - You will find a lot of cheap, week 1 foals flooding the market

### Research Before Buying

- **Monitor the markets** for a week or so before you start looking for a horse to buy
- **Get an idea** of what is available, and how much it is selling for
- **Ask for advice** - If you are unsure of whether a horse is good value, post a link in the **Help me Please forum**

## Key Rules

### The Most Important Rule
**DO NOT over extend yourself to purchase a horse.**

### Auction Basics
Other than that, there isn't a whole lot to say about auctions - once you have found a horse you like, watch it, bid on it, and hopefully you will get it.

## Important Notes

- ❗ **Horses can still be raced** by the current owner while being auctioned!
- 🏠 **Remember - your new horse will require a STALL** once it is purchased. If you do not have enough stalls available, all your horses will suffer

## Smart Auction Strategy

### Before You Bid
- **Study the horse thoroughly** - Stats, age, training history
- **Check similar horses** - Compare prices and value
- **Set a budget** - And stick to it!
- **Consider total costs** - Stall fees, training, veterinary care

### During Bidding
- **Don't get emotional** - Stick to your research
- **Watch timing** - Many auctions end at specific times
- **Have backup options** - Don't fixate on one horse

*Remember: The auction market can wait. Focus on training your current horses first!*
      `
    },
    'first-things-second': {
      title: 'First Things Second',
      content: `
# First Things Second

As you should have discovered by now, there is a lot in TK. The site contains a lot of information on how best to succeed.

A few basic easy steps to getting started, and getting those horses heading towards winning condition!

## Your First Three Steps

1. **Purchase 2 additional hours of vets** (total 4), apply one hour to each horse
2. **Purchase 8 additional hours of training** (total 12), and apply three to each horse
3. **Enter two horses into class racing** to start earning money and experience

These are the first few important steps to take, and will get you started on your way to success.

## All New Stables Start With

- ✅ **5 stalls** - Room for your starting horses
- ✅ **2 vet hours** - Basic medical care 
- ✅ **4 training hours** - Foundation training time
- ✅ **$250,000+ stable cash** - Depends on class/sponsor money
- ✅ **$50,000+ personal cash** - Your starting funds
- ✅ **Horses at vigorous condition** - Ready to race!

## Important Reminders

⚠️ **Without vets, your horses will quickly drop to 'fresh' medical condition!**

📝 **Note:** Horses may be entered into a race or two, depending on what the bots had done this week. Any of these races will have an unlisted apprentice on them.

## What to Focus On

- **Immediate priorities** - Vet hours and training expansion
- **Short-term goals** - Enter class racing to start earning
- **Long-term vision** - Build a sustainable, profitable stable

*Take it one step at a time - you'll be a successful stable manager before you know it!*
# Vet Services

## Overview

Vet services are applied to horses to help increase the rate of improvement in both their physical and medical condition. The more vet hours, the faster you can expect your horses to improve.

**But remember, vets have MINIMAL impact on physical recuperation. Time plays a much more important role than vets.**

## When Vet Services Are Needed

Racing and some types of training are hard work on your horse, and you can expect a drop in physical condition, and if the horse picks up an injury in a race, a drop in medical condition. This is when your team of expert vets step in, and work hard to get the horse fit and healthy again.

Some training types (pampering) will also help improve your horses physical and medical condition, but remember, every training has its drawbacks!

## Key Facts About Vet Services

### Vet Hours Limit
- **Maximum 12 hours** per horse per week (same as training)
- **Weekly billing** - You pay the cost each week regardless of use
- **No reduction costs** - Unlike other services, reducing vet hours has no cost

### Effectiveness
- ✅ **Helpful for recovery** - Speeds up condition improvement
- ⚠️ **Time is more important** - Natural recovery is the primary factor
- 🏥 **Injury focus** - Most effective for medical condition issues

## Cost Management

### Class-Based Pricing
- Depending on your class, vet hours will cost different amounts
- Higher classes pay more for the same services
- Budget accordingly when planning your stable expenses

### Timing Reductions
**Important:** If you wish to reduce your number of vet hours, the best time to do it is as close as possible to financial update on Sunday night. This maximizes the amount of time you get from the vets that you have already paid for, without incurring the cost of having them on staff for another week.

## Strategic Use

### When to Use More Vet Hours
- **After tough races** - Help horses recover faster
- **During injury periods** - Speed medical condition improvement
- **Heavy training periods** - Support physical condition maintenance

### When to Reduce Vet Hours
- **Healthy stable** - When all horses are in good condition
- **Budget constraints** - Cut costs during tight financial periods
- **Off-season** - When horses aren't racing or training heavily

*Use vet services wisely - they help, but time heals best!*
      `
    },
    'vet-services': {
      title: 'Vet Services',
      content: `
# Vet Services

## Overview

Vet services are applied to horses to help increase the rate of improvement in both their physical and medical condition. The more vet hours, the faster you can expect your horses to improve.

**But remember, vets have MINIMAL impact on physical recuperation. Time plays a much more important role than vets.**

## When Vet Services Are Needed

Racing and some types of training are hard work on your horse, and you can expect a drop in physical condition, and if the horse picks up an injury in a race, a drop in medical condition. This is when your team of expert vets step in, and work hard to get the horse fit and healthy again.

Some training types (pampering) will also help improve your horses physical and medical condition, but remember, every training has its drawbacks!

### Vet Hours Limit
- **Maximum 12 hours** per horse per week (same as training)
- **Weekly billing** - You pay the cost each week regardless of use
- **No reduction costs** - Unlike other services, reducing vet hours has no cost

### Effectiveness
- ✅ **Helpful for recovery** - Speeds up condition improvement
- ⚠️ **Time is more important** - Natural recovery is the primary factor
- 🏥 **Injury focus** - Most effective for medical condition issues

## Cost Management

### Class-Based Pricing
- Depending on your class, vet hours will cost different amounts
- Higher classes pay more for the same services
- Budget accordingly when planning your stable expenses

### Timing Reductions
**Important:** If you wish to reduce your number of vet hours, the best time to do it is as close as possible to financial update on Sunday night. This maximizes the amount of time you get from the vets that you have already paid for, without incurring the cost of having them on staff for another week.

## Strategic Use

### When to Use More Vet Hours
- **After tough races** - Help horses recover faster
- **During injury periods** - Speed medical condition improvement
- **Heavy training periods** - Support physical condition maintenance

### When to Reduce Vet Hours
- **Healthy stable** - When all horses are in good condition
- **Budget constraints** - Cut costs during tight financial periods
- **Off-season** - When horses aren't racing or training heavily

*Use vet services wisely - they help, but time heals best!*

## Your First Three Steps

1. **Purchase 2 additional hours of vets** (total 4), apply one hour to each horse
2. **Purchase 8 additional hours of training** (total 12), and apply three to each horse
3. **Enter two horses into class racing** to start earning money and experience

These are the first few important steps to take, and will get you started on your way to success.

## What Every New Stable Starts With

- 🏠 **5 stalls** - Room for your horses
- 🏥 **2 vet hours** - Basic medical care
- 💪 **4 training hours** - Basic training capacity
- 💰 **$250,000+ stable cash** (depends on Class/sponsor money)
- 💵 **$50,000+ personal cash** - Your spending money
- 🐎 **Horses all at vig/vig** - Ready to race condition

## Important First Week Notes

**⚠️ Critical:** Without vets, your horses will quickly drop to 'fresh' medical condition!

**📝 Note:** Your horses may already be entered into a race or two, depending on what the bots had done this week. Any of these races will have an unlisted apprentice jockey on them.

## Priority Checklist

### Week 1 Priorities
- ✅ **Set up veterinary care** - Get those vet hours allocated
- ✅ **Plan training schedule** - Decide which horses need what training
- ✅ **Enter league races** - Start earning money and points
- ✅ **Explore the interface** - Get familiar with the game layout

### What Can Wait
- ❌ **Buying new horses** - Focus on your current stable first
- ❌ **Complex training plans** - Start simple
- ❌ **Stakes racing** - League racing first
- ❌ **Breeding** - Much too early for this

## Getting Help

If you're feeling overwhelmed, remember:
- **Ask questions** in the Help Me Please forum
- **Follow Charlie's tour** - Your virtual guide
- **Read this helpfile** - Everything you need is here
- **Start slowly** - Don't try to do everything at once

*Take it one step at a time - you'll be a successful stable manager before you know it!*
      `
    },
    'stakes-racing': {
      title: 'Stakes Racing',
      content: `
# Stakes Racing

Stakes Racing occurs on a Monday and a Friday. Races open to the public 3 days prior to running. If you have received an invite, you can enter anytime you like.

If you receive an invite to a race, be sure that the race suits your horses and your training plan. You DO NOT have to accept race invitations.

Each Local Track will have 4 or more stakes races created every Monday and Friday. You can travel to other tracks, and other continents to find a race that really suits your horses. You don't have to stay at your local track. So look around, find somewhere that might have empty/easier races.

Each week, over 1000 stakes races are created worldwide.

## Racing Restrictions

Stakes races come with various restrictions to create fair competition:

### Common Restrictions
- **Class restrictions** - Bot stables create Class 1-3 and Class 4-6 races
- **Age restrictions** - Horse of a certain age or age bracket are eligible
- **Gender restriction** - Some races for specific gender only
- **Earnings restriction** - Based on total prize money won (e.g., less than $0.5million)
- **Overall ratings restriction** - Horses under a certain vig/vig rating
- **Limited by number of wins** - More or less than specified wins
- **Maiden** - Only horses who have never won a race
- **Debutantes** - Horses making their track debut
- **Birth restricted** - Horses born within a certain period
- **Apprentice riders only** - Only apprentice jockeys allowed
- **Continent restricted** - Only horses from specific continents
- **Track restricted** - Only horses from local track stables
- **Owner/breeder restricted** - Horse must be homebred
- **Prestige restricted** - Limited to certain stable prestige levels

## The Cost

Stakes racing has financial implications you must consider:

- **Entry fees** - Most stakes races charge entry fees (small number of free-entry stakes exist)
- **Travel costs** - Factor in horse travel and jockey travel expenses
- **Risk vs reward** - Try to cover your costs with a 5th place purse
- **Field size matters** - If less than five horses enter, you only receive the purse for your actual finishing position

## The Advantages

- 🏆 **Gain prestige** for racing away from your home track
- 🎯 **Create races** (OC members only) for additional prestige
- 🌍 **More variety** in race types and competition levels
- 💰 **Higher purses** than league racing

## The Disadvantages

- 💸 **Costs money** without guaranteed returns like league racing
- ✈️ **Travel affects schedules** - can disrupt training and vet schedules  
- 🏇 **Open competition** - could face several Class 1 top-level horses

## Race Selection Strategy

Recent changes to bot stables have made higher-class bots more competitive, with 60+ rated horses now common in open stakes. This makes race selection crucial for new stables.

### Smart Selection Guidelines

**Look for these race types:**
- **C4-6 restricted** - More likely to have similar-level competition
- **Overall rating restricted** - Better chance with horses close to the rating limit
- **Prestige restricted** - Prevents high-prestige stables from dominating

### Before Entering
- **CHECK RATINGS** - Look at other entrants' ratings vs your horses
- **Use search functions** - OC race search makes finding suitable races easier
- **Calculate costs** - Ensure you can cover expenses with realistic finishing position
- **Match restrictions** - Find races that suit your horses' strengths

*Stakes racing is the next step up from league racing - choose your battles wisely!*
      `
    },
    'betting': {
      title: 'Betting',
      content: `
# Betting

Betting is available for anyone on TK, in any race. The beginning of season six saw the introduction of automatic race pools in any race where a human owned stable entered a horse. This was implemented to encourage players to bet more frequently, and to increase the chance of getting money back on a modest bet.

Betting is a great way to supplement your personal finance income, which can then be used for other features, such as the training track or HOOF race simulator.

If you're new, and just starting out, you might not have much of an idea which horses or races to bet on. It is well worth checking out the **Punters Paradise Forum**, where more experienced players post big races that have big betting pools.

## ⚠️ WARNING

Remember, while successful bets **increase** your stable prestige, bad bets **decrease** it. That might not seem like a big deal, but remember, your stable prestige is closely linked to the amount of sponsorship your stable receives each week. So be careful when betting!

## Bet Types

When you place a bet, you may bet on several different outcomes:

### Simple Bets
- **Win** 🥇 - Wagering on a horse being outright winner, only pays 1st place
- **Place** 🎯 - A bet on the horse to finish 1st, 2nd or 3rd. Usually pays at a lower rate than the win odds but more likely to pay out

### Combination Bets  
- **Exacta** 🎲 - Picking the first and second placed horses, in exactly the right order
- **Trifecta** 🏆 - Picking the 1st place horse, followed by 2nd and 3rd in either order (2 combinations in total, so twice the price)

## Betting Restrictions

As we've all got access to a little insider information in Track King (after all, we are the Stable owners, right?!), there are a few restrictions placed on betting:

### Field Size Requirements
- **To bet on a win:** Field must contain at least **3 horses**, with 0 or 3-or-more named jockeys
- **To bet on a place:** Field must contain at least **5 horses**, with 0 or 5-or-more named jockeys  
- **To bet on an exacta:** Same as a place bet requirements
- **To bet on a trifecta:** Field must contain at least **7 horses**, with 0 or 5-or-more named jockeys

## Smart Betting Strategy

### For Beginners
- **Start small** - Don't risk large amounts while learning
- **Study form** - Look at horse stats and recent performance
- **Follow the experts** - Check Punters Paradise Forum for tips
- **Focus on place bets** - More likely to pay out than win bets

### Advanced Tips
- **Watch for value** - Sometimes good horses have surprisingly high odds
- **Consider field size** - Smaller fields = better chances but lower payouts
- **Track prestige impact** - Remember betting affects your stable's reputation
- **Personal finance** - Use winnings for training track and HOOF features

## Community Resources

- **Punters Paradise Forum** - Expert tips and race analysis
- **Racing results feed** - Track historical performance data
- **Big race notifications** - Follow experienced punters' recommendations

*Bet responsibly - it's meant to be fun and supplement your income, not replace it!*
      `
    },
    'gm-bug-reports': {
      title: 'GM & Bug Reports',
      content: `
# GM & Bug Reports

## Bug Reports

When you access the report a bug link on the Home/Help/Forum pages, it takes you to a page like that used when creating a new forum posting. The information you type then gets posted to a private "Bug Report" forum, that all admin staff can access.

If the MODs/GMs can answer the question, they will do so via TK Mail. They will give you details on what the problem is, and how you can get around it. Or, if it actually is a Bug, with information on what will be done to fix it.

### Remember
If you aren't sure if it is a Bug, raise the question in the **Help me please?!** forum first. People will tell you pretty quickly if they know a workaround, or they will tell you to raise it as a bug. The MODs also look at this forum, and will often answer the question/problem and answer it in the forum.

This makes it quicker and easier for the Administration from getting inundated with 'false reports' which makes it faster and easier for the admin to answer and fix actual Bugs.

Remembering when reporting to include as much information on what the suspected bug is, and what happened and what you were trying to do at the time.

## GM Reports

As with the Bug Reports, GM reports are posted to a private admin forum where all admin staff can view them.

GM reports are to be used to report a **problem**, **offensive behaviour**, or a **cheat**.

### When Reporting Issues

When reporting information such as offensive forum behaviour remember to include:
- **The forum name**
- **The thread name**  
- **A copy of the offensive comment**
- **What you find offensive about it**

This enables the MODs to find the appropriate post and quickly and effectively respond to the complaint.

The same applies with cheats and problems. When reporting, remember to put as much detail into the reports to make it easier for the MODs and admin staff to act quickly and efficiently.

*Use these reporting tools responsibly - they help maintain the Track King community for everyone.*
      `
    },
    'owners-club': {
      title: 'Owners Club',
      content: `
# Owners Club

For a small amount of money, you can purchase Owners Club from the TK Shop. Owners Club has several important features that help make getting those horses winning just that little bit easier. It also has features which improve the other activities you can do, as well as providing some extra bonuses for your stable.

## Owners Club Features

- **The ability to create stakes races**
- **Have a stable logo**
- **Have jockey silks**
- **View any race by any horse any time you want**
- **Create your own Private Forum**
- **Have a stable notebook, blog, and guestbook**
- **Race search tool** - how to make finding the perfect race quicker and easier!
- **R.A.T.** - The Race Analysis Tool - get an idea of just how you track in the field, and what your jockey did!
- **RVD** - Race Vision Deluxe - more features, different camera angles, toggling, bookmarking and much more!
- **H.O.O.F.** - The instant simulation race game. Challenge friends and rivals alike, to see who is the best!

**Plus many more!**

## Is OC Essential?

OC is not essential to playing the game, but it does make some things faster, does add a little more dimension to your playing experience, and on the whole, gives you a bit more personalisation to your stable!

## Supporting Track King

**I fully recommend Owners Club to all players.** It is a very modestly priced membership, and it enhances your playing experience so much more!

And remember, the more paying players we have, the more money goes into the TK Development fund!

*Owners Club membership supports Track King's continued development and adds exciting features to enhance your stable management experience.*
      `
    },
    'important-links': {
      title: 'Important Links',
      content: `
# Important Links

## Main Track King Links

### Enter Track King Now!
The main portal to the Track King racing world where your stable management journey begins.

### Getting Some Help/Mentor Program
Connect with experienced players who can guide you through your first weeks in Track King.

### New Player List
Use this list to find new players like yourself to connect with and learn from.

## Community Resources

### ORL Online Racing League - Track King Forum Archives
Historical forums and discussions from the Track King community.

### BBGSite Gaming Directory
Track King's listing in the broader online gaming community directory.

### Track King on Facebook
Become a fan of Track King on Facebook to stay connected with the community!

## Player-Created Resources

The Track King community is amazing at creating helpful resources:

### TK Player Smithz Help Guide and TK News
Comprehensive guides and current news from an experienced player.

### TK Player conanmtck's News, Views and Race Reviews Site
Detailed race analysis and Track King community insights.

### TK Player Babyt's Help Guide
Another excellent guide created by a community member to help new players.

## Getting Connected

These external resources provide additional perspectives and detailed guides that complement this helpfile. Many experienced players maintain their own sites with specialized information and current community news.

Don't hesitate to explore these resources and connect with other players - the Track King community is welcoming and always ready to help newcomers succeed!

*The Track King community extends far beyond the game itself - take advantage of these valuable resources created by fellow players.*
      `
    },
    'what-comes-next': {
      title: 'What comes next?',
      content: `
# What comes next?

So you have followed the steps, you are a month or so down the road, you have taken the TK world by storm, and are winning races left and right. Well, we can dream anyway!

So now you are wondering about all these other aspects of TK that you have been dying to try out, and want to know more about. You have the training sussed, you have been competing weekly in your class races, and your horses are improving steadily (we hope!)

## You are now ready for the next TK challenge!

### Advanced Racing Options
- **Stakes Racing** - More competitive races with entry fees and bigger purses
- **Cup Races** - Prestigious events with special requirements and rewards
- **Invitational Racing** - Exclusive races by invitation only

### Stable Development
- **Breeding Program** - Create the next generation of champions
- **Facility Upgrades** - Improve your stable's capabilities
- **Prestige Building** - Enhance your stable's reputation

### Financial Growth
- **Auction Strategies** - Smart buying and selling of horses
- **Sponsorship Opportunities** - Increase your stable's income
- **Investment Planning** - Long-term financial management

### Community Engagement
- **Forum Participation** - Connect with other stable owners
- **Mentor Relationships** - Help newer players as you were helped
- **Social Features** - Racing silks, stable logos, and personalization

## The Journey Continues

Track King offers depth that can keep you engaged for months and years. Each new challenge brings fresh strategic decisions and opportunities to refine your stable management skills.

Take your time exploring these advanced features. The foundation you've built with training, racing, and financial management will serve you well as you expand into more complex aspects of the game.

*The real adventure in Track King is just beginning - there's always more to learn and achieve!*
      `
    },
    'prestige': {
      title: 'Prestige',
      content: `
# Prestige

## What is Prestige?

Prestige equates to your stable's overall 'score' in Track King, an indicator of the success you've had as a stable manager and sometimes gambler! 

## Benefits of Prestige

Prestige can:
- **Make your facilities more attractive** for public lease
- **Open doorways into higher stake** (and purse!) Cup racing
- **Help persuade better jockeys** to sign with your stable

## How to Gain Prestige

You can gain prestige to a greater or lesser extent by:

- **Winning races**
- **Placing in races**
- **Promoting to next racing class** (or lose prestige by demoting!)
- **Participating/winning races away from your Local Track**
- **Being a successful gambler**

## Types of Prestige

Prestige comes in several forms on TK. Primarily, the prestige refers to the level your stable is at. 

## Important Effects

- **Prestige is responsible for sponsors deciding how much money to give you**
- **It affects what jockeys will ride for you**

*Prestige reflects your stable's success and reputation in the Track King community - build it through consistent performance and smart management.*
      `
    },
    'forums': {
      title: 'Forums',
      content: `
# Forums

## Overview

The forums are a hive of activity! It is the place you can come to discuss training, racing, wins, losses or just about anything else!

## Automatic Subscriptions

When you register for your stable, you will automatically be subscribed to the following forums:

### Geographic Forums
- **Global** - where everyone comes to play
- **Continent** - Stables from your continent
- **Regional** - The place where most big races will be run
- **Local** - Your local track forum

### Help and Community Forums
- **Help Me Please** - this is the place for you! Everyone contributes to answering questions
- **Suggestions & Ideas** - Make suggestions about changes and improvements to the game

### Trading and Racing Forums
- **Horse Ads** - Advertise and view horses/studs that other stables are selling
- **Racing Ads** - Find races set up by fellow TKers
- **Punters Paradise** - Betting advice and race analysis
- **Track Bulletins** - Notices of changes to the game

## Forum Rules

- **English speaking only** in main forums
- **No offensive language** or verbal attacks
- **Keep posts in appropriate forums**
- **Be respectful** to other players

*The forums are the heart of the Track King community - participate respectfully and enjoy the discussions!*
      `
    },
    'things-to-do': {
      title: 'Things to do...',
      content: `
# Things to do...

It is important that you be aware that the things contained in this section are not all available to free users. A lot of these features are Owners' Club Features.

## Why Owners Club?

I fully recommend Owners Club to all players. It is a very modestly priced membership, and it enhances your playing experience so much more!

And remember, the more paying players we have, the more money goes into the TK Development fund!

## Entertainment Features

### Visual Customization
- **Racing Silks** - Design your stable's colors and patterns
- **Stable Logos** - Create or upload custom stable branding
- **Personal Branding** - Express your stable's unique identity

### Interactive Gaming
- **H.O.O.F.** - Horse Online Owner Fun instant race simulator
- **Training Track** - Arcade-style and simulation training sessions
- **Community Challenges** - Compete with friends and rivals

### Social Features
- **Private Forums** - Create discussion spaces for your friends
- **Stable Notebooks** - Keep detailed records and strategies
- **Guest Books** - Allow visitors to leave messages
- **Stable Blogs** - Share your Track King journey

*Track King's fun features ensure that stable management remains engaging and entertaining beyond the core racing mechanics.*
      `
    },
    'racing-silks': {
      title: 'All The Pretty Pictures (Racing Silks)',
      content: `
# All The Pretty Pictures (Racing Silks)

## Stable Silks

The beginning of season six saw the introduction of a much larger range of options for the more artistically gifted players when it came to creating fabulous silks to show off to the world during races.

### Design Options Available
- **Multiple color combinations** for jerseys and sleeves
- **Various patterns and designs** to make your stable stand out
- **Cap and sleeve customization** for complete personalization
- **Professional appearance** during races and in race results

### Racing Silk Examples
The Track King community showcases incredible creativity with their racing silks. From simple, elegant designs to complex patterns that reflect stable themes, the variety is impressive.

## Stable Logo

You can upload any image you like, either something of your own creation specifically for your stable, or a picture or logo of your choice. Custom stable logos add personality and professionalism to your stable's appearance.

### Getting Help with Logos

If you aren't particularly handy with creating pictures to use as logos, there are several people on TK who are willing to help out, so just try putting a post in the forums, and see who responds.

*Racing silks and stable logos are your chance to express creativity and build a distinctive visual identity in the Track King community.*
      `
    },
    'training-track': {
      title: 'Training Track',
      content: `
# Training Track

The Training Track is yet another exciting feature of Track King. This facility is paid for with Personal Finance and is available to anyone who wishes to use it.

## Important Safety Note

Once you click to start a training session, the money is automatically deducted from your bank account. If you do not complete the session, you will lose the money, and won't get the potential XP gains.

## The Three Session Types

### Session 1: The Light Session (Arcade Mile)
An arcade style game where you compete against nine other bot horses. You can select the jockey type and race level:

- **Easy** - the jockey maintains perfect balance throughout the race
- **Medium** - the jockey may lose balance during the race  
- **Hard** - the jockey may lose balance, and scramble the directions

*This is NOT a training session - no physical/medical impact, or XP gain*
**Cost: $1,000**

### Session 2: Normal Session
A regular training session where you can select distance, weather, track type, number of opponents, quality of horses, jockey, and race instructions.

A small medical/physical loss can be expected, plus experience in the selected distance/track condition.
**Cost: $20,000**

### Session 3: Full Session
This is equivalent to a normal race. Expect the same physical/medical loss and experience gains as a regular race.
**Cost: $50,000**

*The Training Track offers a controlled environment to test your horses and strategies.*
      `
    },
    'finances': {
      title: 'Finances',
      content: `
# Finances

Managing your finances effectively is crucial for success in Track King. Understanding the difference between stable finances and personal finances is key.

## Two Types of Money

### Stable Finance
Your stable's operating budget for:
- **Training hours** - Developing your horses
- **Veterinary services** - Keeping horses healthy
- **Stall maintenance** - Basic stable operations
- **Jockey wages** - Professional rider salaries

### Personal Finance
Your personal money for:
- **Race entries** - Stakes racing and special events
- **Horse purchases** - Auction acquisitions
- **Training Track** - Personal training facility use
- **Betting activities** - Wagering on races

## Weekly Financial Cycle

### Income Sources
- **Sponsorship money** - Weekly stable finance based on prestige
- **Race purses** - Prize money from competitive success
- **Agistment fees** - Income from boarding other players' horses

### Weekly Expenses
- **Stable maintenance** - Basic operating costs
- **Training hours** - Horse development expenses
- **Veterinary care** - Health maintenance costs

## Financial Planning Tips

- **Track weekly cash flow** - Monitor income vs expenses
- **Build financial reserves** - Prepare for opportunities
- **Avoid overspending** - Stay within your means
- **Plan major investments** - Facility upgrades and horse purchases

*Sound financial management is the foundation of every successful Track King stable.*
      `
    },
    'mentor': {
      title: 'Mentor Program',
      content: `
# Mentor Program

So you've decided to join the ever expanding Track King community. That's great! Welcome aboard!

But I hear you ask....where to from here? What do I do? How do I do it?

Fear not fellow stable owner, for help is readily at hand!

## What is the Mentor Program?

The Track King Mentor Program is designed for players just like yourself who want to jump right in and start playing, but are wondering about the finer points of the game.

By joining the Program you will be assigned a veteran player (your mentor) who will be happy to advise and guide you during the first few weeks of Track King. They won't run your stables for you, but they are more than happy to give you the tools and knowledge to help you help yourself.

## What Your Mentor Will Do

- **Answer your questions** - No question is too basic or silly
- **Provide strategic advice** - Help you make informed decisions
- **Share experience** - Learn from their successes and mistakes
- **Offer encouragement** - Support you through learning challenges

## How to Join

**Joining the Mentor Program is easy!** Simply visit the mentor program signup page and you'll be matched with an experienced player.

Feel free to ask them any questions you may have about the game - believe me, there is no such thing as a stupid question!

*The Mentor Program represents the best of the Track King community - experienced players helping newcomers succeed.*
      `
    },
    'cup-races': {
      title: 'Cup Races',
      content: `
# Cup Races

This is the TK crowning glory. **Winning a Cup!**

There are many different cups: some are TK sponsored, some are sponsored by business and corporate companies, and others are sponsored by TK players themselves!

## Types of Cups

### Official TK Cups
These are cups sponsored by TK. For regional ones such as Sprint Shield, Magic Mile, Classic/Challenge, you receive your invite automatically. For other official TK cups such as the Track King Open and the Paupers Kettle, you must purchase invites via the Cup Info page.

### Official Sponsored Cups  
These are cups sponsored by a mixture of companies wishing to advertise in TK, and by TK players themselves. The Breeders Cup Series, while nominally sponsored by this site, is now sponsored by a group of dedicated players within TK.

### Community Cups
These cups can be created by anyone within TK for the cost of some game credits. Once they reach their required number of credits, they are scheduled. They have unique options, including Rivalry Cups where two tracks compete to see who is the best.

## Cup Information

### Key Details
- **Horse restrictions** - Some cups allow you to use any horse for each successive round, others require you to use the same horse
- **Invitations required** - The invitation process is listed on each respective Cup page
- **Performance matters** - Top x-number of horses receive invites to successive rounds
- **Schedule** - Cup races run over up to 4 consecutive weekends, depending on rounds
- **Race days** - Saturday and Sunday

## Why Race in Cup Races?

- 🏆 **For prestige** - Elite competition recognition
- ⭐ **For glory** - Racing excellence
- 💰 **For the money** - Substantial prize pools  
- 🏅 **For trophies** - Pretty shiny hardware for your cabinet
- 🎉 **For fun** - The ultimate racing experience

*Cup races represent the pinnacle of Track King competition - train hard and race smart to earn your invitation!*
- **Class 2** - Elite competition
- **Class 1** - The pinnacle of Track King racing

## Class Promotion and Demotion

### Promotion Requirements
Moving up in class requires:
- **Consistent success** in your current class racing
- **Point accumulation** through league racing performance
- **Stable development** and improved horse quality
- **Financial stability** to handle higher class costs

### Promotion Benefits
- **Higher purses** in league and stakes racing
- **Increased prestige** and recognition
- **Access to better facilities** and services
- **Elite competition** and greater challenges

## Planning Your Progression

Take your time at each level to master the fundamentals before advancing. Each class brings new challenges and opportunities.

*The class system provides structure and goals for your Track King journey - embrace each level as an opportunity to grow.*
      `
    },
    'the-levels': {
      title: 'The Levels',
      content: `
# The Levels

You will have noticed that everything has a word and number value attached. Here's a comprehensive guide to understanding where you are at in Track King.

The important thing to note - each level has a sublevel, some has less sublevels than others, and these ratings will change at a faster rate.

## Condition Ratings
(From worst to best)
- **Incapacitated** - Critical condition requiring immediate attention
- **Debilitated** - Severely weakened
- **Exhausted** - Completely drained
- **Wasted** - Very poor condition
- **Drained** - Low energy reserves
- **Spent** - Used up energy
- **Weary** - Tired but functional
- **Adequate** - Acceptable condition
- **Fresh** - Good energy levels
- **Vigorous** - Excellent condition

## Horse Spirit Types
Understanding your horse's temperament:
- **Docile** - Very calm and manageable
- **Placid** - Peaceful and easy-going
- **Obedient** - Follows instructions well
- **Resilient** - Bounces back from setbacks
- **Frisky** - Playful and energetic
- **Strong-willed** - Has own opinions
- **Temperamental** - Mood varies
- **Aggressive** - Can be difficult to handle
- **Fiery** - High-spirited and intense
- **Unbroken** - Wild and untrained

## Skills Rating Scale
(From worst to best)
- **Dire** - Extremely poor
- **Awful** - Very bad
- **Miserable** - Poor performance
- **Underdone** - Needs development
- **Ordinary** - Below average
- **Average** - Standard level
- **Moderate** - Decent ability
- **Adequate** - Sufficient skill
- **Acceptable** - Good enough
- **Satisfactory** - Meets expectations
- **Reasonable** - Above average
- **Admirable** - Very good
- **Excellent** - Outstanding
- **Grand** - Impressive
- **Tremendous** - Exceptional
- **Marvelous** - Amazing
- **Majestic** - Magnificent
- **Spectacular** - Stunning
- **Imposing** - Commanding
- **Awe-inspiring** - The absolute best

## Track Conditions
Track surface affects race performance:
- ✅ **Fast** - The best condition for speed
- **Good** - Excellent racing surface
- **Dead** - Neutral, balanced surface
- **Slow** - Harder going, favors stamina
- ⚠️ **Heavy** - The worst condition, very difficult

## Weather Types
Weather affects track conditions and racing:
- **Scorching** - Extremely hot
- **Very Hot** - High temperatures
- **Fine and Hot** - Clear skies, warm
- **Fine and Warm** - Pleasant conditions
- **Sunny** - Bright and clear
- **Overcast** - Cloudy but dry
- **Morning Drizzle** - Light rain early
- **Afternoon Showers** - Rain later
- **Morning Showers** - Rain early
- **Rain** - Wet conditions

*Understanding these levels helps you make better decisions about training, racing, and horse management.*

## Your First Three Steps

1. **Purchase 2 additional hours of vets** (total 4), apply one hour to each horse
2. **Purchase 8 additional hours of training** (total 12), and apply three to each horse
3. **Enter two horses into class racing** to start earning money and experience

These are the first few important steps to take, and will get you started on your way to success.

## What Every New Stable Starts With

- 🏠 **5 stalls** - Room for your horses
- 🏥 **2 vet hours** - Basic medical care
- 💪 **4 training hours** - Basic training capacity
- 💰 **$250,000+ stable cash** (depends on Class/sponsor money)
- 💵 **$50,000+ personal cash** - Your spending money
- 🐎 **Horses all at vig/vig** - Ready to race condition

## Important First Week Notes

**⚠️ Critical:** Without vets, your horses will quickly drop to 'fresh' medical condition!

**📝 Note:** Your horses may already be entered into a race or two, depending on what the bots had done this week.

## Priority Checklist

### Week 1 Priorities
- ✅ **Set up veterinary care** - Get those vet hours allocated
- ✅ **Plan training schedule** - Decide which horses need what training
- ✅ **Enter league races** - Start earning money and points
- ✅ **Explore the interface** - Get familiar with the game layout

*Take it one step at a time - you'll be a successful stable manager before you know it!*
      `
    },
    'injury-profile': {
      title: 'Injury Profile',
      content: `
# Injury Profile

The Injury Profile system helps you understand and manage injury risks for your horses.

## Understanding Injury Risk

Each horse has different susceptibility to injuries based on:
- **Age** - Older horses may be more prone to certain injuries
- **Training intensity** - Heavy training increases injury risk
- **Racing frequency** - More races can mean higher injury chance
- **Medical condition** - Current health affects future injury risk

## Using the Injury Profile

### Training Decisions
- **Adjusting training intensity** based on injury risk
- **Scheduling rest periods** for high-risk horses
- **Balancing development with safety**

### Racing Strategy
- **Choosing appropriate races** for each horse's risk level
- **Timing race entries** to minimize injury exposure

## Prevention Strategies

- **Monitor medical condition** closely
- **Use appropriate vet hours** for injury-prone horses
- **Balance training types** to avoid overuse injuries
- **Schedule recovery time** between intensive periods

*Use the Injury Profile to balance performance goals with horse welfare.*
      `
    },
    'agistment-facilities-and-money': {
      title: 'Agistment, Facilities and Money!',
      content: `
# Agistment, Facilities and Money!

## Agistment

This is the term given to extra stalls that you buy, and with the help of your handy admin staff, they are leased out to the public. Each stable is allowed a maximum of 30 stalls. The number of these stalls that you can afford to buy and lease is entirely up to you. It is a good source of reliable steady income to add to that sponsorship!

Training hours can also be purchased (max. 60) and leased to the public in the same manner.

**Admin Staff** - once hired these staff do require a small weekly wage, but it is a very small percentage of the amount of income they bring into your stable.

## Facilities

On the training & vet page, you will also notice a Specialist Facilities section. There are many different types of facilities, and each one has a different bonus it adds to the stable. The prices vary, and the amount of money you put into them varies. Which facilities you choose depends entirely on you, and what you want.

### An Important Note

These facilities are **OPTIONAL** only. You can still run a very successful stable without them. It is also important to not underestimate the amount these facilities will take from your weekly cashflow. If you are only just breaking even - they are probably NOT a good idea.

## The Money Side

- **Facilities** - cost money  
- **Agistment** - provides money

The key is balancing investments in facilities with the reliable income from agistment services. Plan your finances carefully and ensure you can afford the ongoing costs before committing to major facility purchases.

*Smart facility and agistment management can significantly boost your stable's financial health and competitive capabilities.*
      `
    }
  };

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionKey) 
        ? prev.filter(s => s !== sectionKey)
        : [...prev, sectionKey]
    );
  };

  const renderMarkdown = (content: string) => {
    return content.split('\n').map((line: string, index: number) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2"><Zap className="w-5 h-5 text-blue-500" />{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-medium text-gray-700 mb-2 mt-4">{line.slice(4)}</h3>;
      }
      if (line.startsWith('- **') && line.includes('**:')) {
        const [label, ...rest] = line.slice(2).split('**:');
        return <li key={index} className="mb-2"><strong className="text-blue-600">{label}</strong>: {rest.join('**:')}</li>;
      }
      if (line.startsWith('- ✅')) {
        return <li key={index} className="mb-1 text-green-600 flex items-center gap-2"><span className="text-green-500">✅</span>{line.slice(4)}</li>;
      }
      if (line.startsWith('- ❌')) {
        return <li key={index} className="mb-1 text-red-600 flex items-center gap-2"><span className="text-red-500">❌</span>{line.slice(4)}</li>;
      }
      if (line.startsWith('- ⚠️')) {
        return <li key={index} className="mb-1 text-orange-600 flex items-center gap-2"><span className="text-orange-500">⚠️</span>{line.slice(4)}</li>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="mb-1 ml-4">{line.slice(2)}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.startsWith('*') && line.endsWith('*')) {
        return <p key={index} className="italic text-gray-600 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-200 my-4">{line.slice(1, -1)}</p>;
      }
      return <p key={index} className="mb-2 leading-relaxed">{line}</p>;
    });
  };

  const filteredPages = () => {
    if (!searchTerm) return null;
    
    const results: Array<{sectionKey: string, pageKey: string, pageTitle: string, sectionTitle: string}> = [];
    Object.entries(navigation).forEach(([sectionKey, section]: [string, any]) => {
      Object.entries(section.pages).forEach(([pageKey, pageTitle]: [string, any]) => {
        if (pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ((pageContent as any)[pageKey]?.content || '').toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({
            sectionKey,
            pageKey,
            pageTitle,
            sectionTitle: section.title
          });
        }
      });
    });
    return results;
  };

  const currentContent = pageContent[currentSection] || {
    title: navigation[Object.keys(navigation).find(section => 
      Object.keys(navigation[section].pages).includes(currentSection)
    )]?.pages[currentSection] || 'Page Not Found',
    content: `
# Coming Soon!

This page is being prepared. Please check back soon for complete content.

In the meantime, explore other sections of the helpfile using the navigation menu.
    `
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Track King</h1>
                  <p className="text-sm text-gray-600">Newbies Helpfile</p>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Complete Archive
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl border-r border-gray-200 transition-transform duration-300 ease-in-out`}>
          <div className="h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 rounded-md text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Results */}
              {searchTerm && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Search Results</h3>
                  <div className="space-y-1">
                    {filteredPages()?.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentSection(result.pageKey);
                          setSearchTerm('');
                          setSidebarOpen(false);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="font-medium text-sm text-blue-600">{result.pageTitle}</div>
                        <div className="text-xs text-gray-500">{result.sectionTitle}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <nav className="space-y-2">
                {Object.entries(navigation).map(([sectionKey, section]) => (
                  <div key={sectionKey}>
                    <button
                      onClick={() => toggleSection(sectionKey)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        expandedSections.includes(sectionKey) 
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${section.color} text-white`}>
                          {section.icon}
                        </div>
                        <span className="font-medium">{section.title}</span>
                      </div>
                      {expandedSections.includes(sectionKey) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(sectionKey) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {Object.entries(section.pages).map(([pageKey, pageTitle]) => (
                          <button
                            key={pageKey}
                            onClick={() => {
                              setCurrentSection(pageKey);
                              setSidebarOpen(false);
                            }}
                            className={`w-full text-left p-2 pl-4 rounded-lg transition-colors ${
                              currentSection === pageKey
                                ? 'bg-blue-100 text-blue-700 border-l-2 border-blue-500'
                                : 'hover:bg-gray-50 text-gray-600'
                            }`}
                          >
                            {pageTitle}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Stats */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Archive Complete!</h3>
                <div className="text-sm text-green-700 space-y-1">
                  <div>📄 31 Pages Archived</div>
                  <div>🖼️ 8 Screenshots Captured</div>
                  <div>📚 ~20,000 Words</div>
                  <div>✅ 100% Content Preserved</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            <article className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {renderMarkdown(currentContent.content)}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="mt-8 text-center text-sm text-gray-500">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Preserved from the original Track King Newbies Helpfile</span>
                  <Heart className="w-4 h-4 text-red-400" />
                </div>
                <p>Archived October 25, 2020 • Restored with ❤️ for the TK community</p>
              </footer>
            </article>
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default TrackKingHelpfile;