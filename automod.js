const { SlashCommandBuilder, AutoModRuleEventType, AutoModRuleTriggerType } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-automod')
    .setDescription('Deploys 5 distinct AutoMod keyword rules to help earn the badge.'),

  async execute(interaction) {
    // 1. Check if the bot has the correct permissions in the server
    if (!interaction.guild.members.me.permissions.has('ManageGuild')) {
      return interaction.reply({ 
        content: '❌ I need the **Manage Server** (MANAGE_GUILD) permission to create AutoMod rules!', 
        ephemeral: true 
      });
    }

    await interaction.deferReply({ ephemeral: true });

    // 2. Define the word pool (excluding the word you specified)
    const badWordsPool = [
      'fuck', 'ass', 'bitch', 'bastard', 'cunt', 
      'dick', 'pussy', 'whore', 'slut', 'twat'
    ];

    try {
      // 3. Split the words into 5 unique rules (2 words per rule) 
      // This maximizes your rule count quickly towards the 100-rule badge goal
      for (let i = 0; i < 5; i++) {
        const wordsForRule = [badWordsPool[i * 2], badWordsPool[(i * 2) + 1]];
        
        await interaction.guild.autoModRules.create({
          name: `Badge Filter Part ${i + 1}`,
          eventType: AutoModRuleEventType.MessageSend,
          triggerType: AutoModRuleTriggerType.Keyword,
          triggerMetadata: {
            keywordFilter: wordsForRule
          },
          actions: [
            {
              type: 1 // BLOCK_MESSAGE
            }
          ],
          enabled: true,
          reason: 'AutoMod badge generation setup'
        });
      }

      await interaction.editReply({ 
        content: '✅ **Success!** 5 AutoMod rules have been deployed to this server. Repeat this in your other mock servers!' 
      });

    } catch (error) {
      console.error(error);
      await interaction.editReply({ 
        content: `❌ **Error creating rules:** ${error.message}\n*(Note: If these rules already exist in this server, you must delete them before running this command again.)*` 
      });
    }
  },
};
