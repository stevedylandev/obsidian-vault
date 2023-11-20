Size doesn’t matter right? 

# One-liner

NAME is an app made for professional photographers to help sync time and date photo metadata across multiple shooters.

# Name

- 2ndSync
- ✅ FrameFixer
- ShotFixer
- SecondShotSync

# MVP

- User provides an album of photos from two different cameras at the same event with off sync metadata. App will analyze the photos with AI, find an object from both sets, then adjust the metadata.
- The user should simply drop/select the folder, provide a desired start date, then see a progress bar until it’s completed. Simple.

# Plan

- [ ]  Scope tech needs and options
- [x]  Create landing page with email signup
- [ ]  Research more on building in public and what to post/not post
- [ ]  Start product tease as development starts, get email sign ups to grow following and let people know when it’s ready
- [ ]  Once MVP is complete, release limited  beta to get user feedback and iterate
- [ ]  Fully launch product with price

# Scope

- Logic
    - Import path to images on local disk
    - Filter into groups based on camera serial number
    - Run groups through tensorflow to find images that are very similar
    - Based on groups adjust metadata for photos to fix time difference
    - Write to disk
- Stack
    - Python backend with tensowflow
    - Electron app UI
- Unanswered Questions
    - Difficulty to run AI locally
    - Ability to hookup Python backend with Electron Front End
    - Locating and adjusting photo metadata
    

## Content

[[Soft Announcement]]

[[Welcome Email]]

[[Reddit FB Post]]

[[Instagram Post]]