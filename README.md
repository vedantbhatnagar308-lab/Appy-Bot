# Touchpoint Application Bot

A Discord bot for managing server applications, support tickets, giveaways, and polls — built and maintained by AeroX Development.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Commands](#commands)
- [Setup](#setup)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [Support](#support)
- [License](#license)
- _________________________________________________________________________________________________________________________________________________________________________________________________________

---

## Overview

TouchPoint Application Bot is a multi-purpose Discord bot designed to streamline server management. It provides a fully interactive application system with custom questions, a ticketing system with staff controls, giveaway and poll management, and export tools for reviewing applicants — all operated through Discord slash commands.

---

## Features

**Applications**
- Create and configure multiple application forms per server
- Set up to 10 custom questions per application
- Accept, deny, or put applications on hold with staff review flow
- Log approved and denied applications to dedicated channels
- Assign a category channel where accepted applications are posted
- Export all server applications to a CSV file

**Tickets**
- Panel-based ticket creation with configurable prompts
- Staff role management — control who can view and manage tickets
- Add or remove users from individual ticket threads
- Close, reopen, and permanently delete tickets
- User blacklist to prevent abuse

**Giveaways**
- Start giveaways with a custom prize, duration, and winner count
- Button-based entry system
- Automatic winner selection when the giveaway ends
- Reroll support after a giveaway concludes

**Polls**
- Create polls with a custom question and up to 5 options
- Button-based voting — one vote per user
- Live vote count displayed on the poll message

**General**
- Help command with categorized command browsing
- Bot stats overview
- Automatic custom emoji sync on startup
- ____________________________________________________________________________________________________________________________________________________________

---

## Commands

### Application Commands

| Command | Description | Permission |
|---|---|---|
| `/application` | View and manage applications | Admin |
| `/apply` | Submit an application for the server | Everyone |
| `/appanel` | Configure the application panel interactively | Admin |
| `/export_applications` | Export all applications to a CSV file | Admin |

### Ticket Commands

| Command | Description | Permission |
|---|---|---|
| `/ticket` | Manage tickets in your server | Admin |
| `/panel` | Configure the ticket panel | Admin |
| `/settings` | Configure staff roles and blacklist | Admin |
| `/add` | Add a user to the current ticket | Staff |
| `/remove` | Remove a user from the current ticket | Staff |
| `/close` | Close the current ticket | Staff |
| `/reopen` | Reopen a closed ticket | Staff |
| `/delete` | Permanently delete a ticket channel | Staff |
| `/blacklist` | Manage the ticket blacklist | Admin |

### Other Commands

| Command | Description | Permission |
|---|---|---|
| `/giveaway start` | Start a new giveaway | Admin |
| `/giveaway reroll` | Reroll a finished giveaway | Admin |
| `/poll create` | Create a new poll | Admin |
| `/help` | Browse all bot commands by category | Everyone |
| `/stats` | View bot statistics | Everyone |
_____________________________________________________________________________________________________________________________________________________________________
---

## Setup

**1.Fork This Repository**
## Fork This Repository


**2. Create a new account on Railway (https://railway.com/)**
### --> Click New Project 
### --> Configure GitHub On Your New Account
### --> Click The Project you forked

**3. it Will Start Creating**

### --> It Will Be Crashed 
### --> Click The Project And then Variables 
### --> Make Sure You Have Bot Token and The Client ID 
### --> Add Those In The variables

____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


On startup the bot will:
- Sync custom emojis to your Discord application automatically
- Register all slash commands globally
- Connect and begin listening for events

---

## Configuration

All configuration is stored in a local SQLite database (`data/bot.db`) and is managed entirely through Discord slash commands — no manual database editing is required.

**Key configuration steps after inviting the bot:**

1. Run `/settings` to assign staff roles for the ticket system
2. Run `/panel` to set up the ticket creation panel in a channel
3. Run `/appanel` to create and configure application forms
4. Run `/application` to review submitted applications

## Credits

| Role | Name |
|---|---|
| Developer | codebymitch , CortexKai |
| Organization | TouchPoint |
| Discord | https://dsc.gg/touchpoint |

---

## Support

For help, questions, or bug reports, join the TouchPoint support server:

**https://dsc.gg/touchpoint**

---

## License

This project is released under a custom source-available license.
You may view and run the code privately, but redistribution, public hosting, and commercial use are prohibited without written permission from the author.

See [LICENSE](./LICENSE) for the full terms.
