# Schedule Terms

Contributors:      Toro_Unit,hamworks  
Donate link:       https://www.paypal.me/torounit  
Tags:              schedule, term  
Requires at least: 6.7  
Tested up to:      7.0  
Requires PHP:      8.2  
Stable tag:        2.0.1  
License:           GPLv2 or later  
License URI:       https://www.gnu.org/licenses/gpl-2.0.html  

Automatically set and unset the term when the time is up.

## Description

Schedule Terms lets you reserve a date and time for a category, tag, or any other taxonomy term to be attached to or detached from a post, instead of editing the post manually when the time comes.

It's useful for things like:

* Featuring a post in a "Sale" or "Campaign" category only during a specific period, and removing it automatically afterwards.
* Adding a "New" tag to a post for a limited time after publishing.
* Hiding a post from a "Featured" listing taxonomy once a promotion ends.

Once scheduling is enabled for a taxonomy, a "Schedule Terms" panel appears in the post editor for every term in that taxonomy, with separate "Attach" and "Detach" date/time fields. WordPress' own cron system checks the schedule and updates the post's terms automatically when the time arrives, so there's nothing else to do once a schedule is set.

### Usage

1. Go to the category, tag, or custom taxonomy management screen.
2. Check the "Enable scheduling" checkbox when adding or editing a term (or via Quick Edit) to turn scheduling on for that term.
3. Open a post in the block editor and find the "Schedule Terms" panel in the document sidebar.
4. Set the "Attach" date/time to have the term automatically added to the post at that time, and/or the "Detach" date/time to have it automatically removed.
5. Save or update the post. The term will be attached/detached automatically once the scheduled time passes.

### FAQ

**Does the term get attached/detached even if I don't edit the post again?**

Yes. Scheduling is handled by WordPress cron, so the post doesn't need to be opened or saved again after the schedule is set.

**What happens if I leave both the "Attach" and "Detach" fields empty?**

Nothing is scheduled for that term on that post; the term is only added or removed when you do so manually, as usual.

**Can I use this with a custom taxonomy?**

Yes, scheduling can be enabled for any taxonomy that is shown in the admin UI (`show_ui` is true), not just categories and tags.

## Screenshots

1. Activate scheduling.
2. "Schedule Terms" panel
3. Set datetime in "Schedule Terms" panel.

## Changelog

### 2.0.0
* Tested WordPress 7.0.
* Drop support for PHP 8.1.
* Renamed the internal PHP namespace from `HAMWORKS\WP\Schedule_Terms` to `Torounit\WP\Schedule_Terms` (old class names are aliased for backward compatibility and will be removed in a future major release).

### 1.3.0
* Tested WordPress 6.5.
* Update packages.
* Add reset button.

### 1.2.2
* Load translation.
* Fix DateTimePicker format.

### 1.2.0
* fix ui.

### 1.1.2
* Bug fix.

### 1.0.2
* fix ci.

### 1.0.0
* First release.

## Credits

* [WP Term Meta UI](https://github.com/JJJ/wp-term-meta-ui/)

