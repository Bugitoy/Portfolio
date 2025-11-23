import { ReactLenis } from "lenis/dist/lenis-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-n-8">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-0 lg:py-10 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-8 lg:mb-15 text-2xl lg:text-4xl font-black uppercase text-zinc-50 px-3 mt-[130px]"
      >
        Timeline of my projects and learning journey
      </motion.h1>

      <ScheduleItem
        title="Built a Pathtracer from scratch in Vulkan and C++ using knowledge gained from watching the The Cherno on youtube"
        date="Nov 10th"
        project="RayTracer"
      />

      <ScheduleItem
        title="Published a comprehensive PyTorch crashcourse on Github, covering the fundamentals of building neural networks from scratch. The course includes practical examples and code snippets to help learners understand key concepts in deep learning using PyTorch."
        date="Nov 8th 2025"
        project="PyTorch Neural Networks from Scratch Crashcourse"
      />

      <ScheduleItem
        title="Converted text from a setswana to english pdf image dictionary file to a readable text file using OCR techniques and python libraries such as pytesseract and imagetotextconverter.net
                then stored the data in json format to be used in a web application."
        date="Oct 4th - Oct 22nd 2025"
        project="Thanodi Dictionary Website"
      />

      <ScheduleItem
        title="Published my GPU accelerated Maxwell Equation simulator written in C++ using CUDA on GitHub. This project showcases my ability to leverage GPU computing for complex simulations."
        date="Oct 6th 2025"
        project="GPU Accelerated Maxwell Equation Simulator"
      />

      <ScheduleItem
        title="Began learning how ray tracing works, including the mathematics behind it and some basic functionalities of Vulkan."
        date="Oct 5th 2025"
        project="N/A"
      />

      <ScheduleItem
        title="Published a GPT-style-transformer language model built from scratch using PyTorch on GitHub."
        date="Oct 5th 2025"
        project="GPT-Style Transformer Language Model"
      />

      <ScheduleItem
        title="Built a character level bigram language model from scratch using pytorch and trained it on a dataset of Shakespeare's works. The model generates text one character at a time, predicting the next character based on the previous ones."
        date="Oct 5th 2025"
        project="Character Level Bigram Language Model"
      />

      <ScheduleItem
        title="Began learning about how GPT models work, including their architecture, training process, and applications. This involved studying transformer models, attention mechanisms, and natural language processing techniques."
        date="Sept 28th 2025"
        project="N/A"
      />

      <ScheduleItem
        title="Began learning about how to program in pytorch and building neural networks from scratch. This involved understanding the fundamentals of deep learning, backpropagation, and optimization techniques."
        date="Sep 28th 2025"
        project="N/A"
      />

      <ScheduleItem title="Took a course on Nvidia's website talking about Accelerated Computing in Modern CUDA in C++" date="Sept 6th - Sept 27th 2025" project="N/A"/>
      
      <ScheduleItem
        title="Worked on LiveSpaces, an online real estate website based in Botswana showing properties for sale and rent.
               I also committed Thanodi dictionary website to Github instead of having it locally only."
        date="Aug 26th - Sep 4th 2025"
        project="LiveSpaces Real Estate Website"
      />

      <ScheduleItem
        title="Made the ReadMe for my projects more detailed and informative."
        date="Aug 25th 2025"
        project="Pinned projects on GitHub"
      />

      <ScheduleItem
        title="Overhauled the loading state in `src/app/meetups/study-groups/page.tsx`, replacing the generic rectangular skeleton with a detailed card structure that mirrors the actual UI components."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added specific skeleton elements for the group title, participant count, and 'Join' button to prevent layout shifts (CLS) and improve perceived performance during data fetching."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a stacked avatar skeleton using a loop to render three overlapping circular placeholders, visually matching the user profile piles seen in active study groups."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Confessions and Comments API endpoints (`/api/confessions/infinite` and `/api/confessions/[id]/comments`) to remove strict server-side authentication, allowing public users to access confession feeds and read comments without logging in."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced the `ConfessionsPage` interface to conditionally render tabs; public users now see only 'Posts', 'Hottest', and 'Universities', while 'Saved' and 'My Posts' are exclusively available to authenticated users."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented client-side authentication checks in `useUnifiedConfessions` and the UI to prevent unauthenticated users from performing interactive actions like voting, saving posts, or creating new confessions."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the `fix-customerid-constraint.ts` database script to use ES6 import syntax instead of `require`, aligning it with the project's TypeScript configuration."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Expanded the `ConfessionsPage` with a new deletion workflow, featuring a conditionally rendered 'Trash' icon for post authors and a confirmation dialog to prevent accidental deletions."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a `DELETE` method to the `/api/confessions/[id]` endpoint, incorporating strict server-side checks to ensure only the authenticated author can delete their own confession."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the `deleteConfession` function in `useUnifiedConfessions`, enabling the front end to request deletions and instantly update the local state across 'Posts', 'Hottest', and 'Saved' tabs."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced `db-utils.ts` with a `deleteConfession` transaction that atomically removes a confession along with its associated votes, comments, and saved references to maintain database integrity."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced a 'Verification Badge' feature to the `UserReputationBadge` component, visually distinguishing 'Plus' and 'Premium' users with a dedicated indicator next to their reputation score."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the `useUserReputation` hook and `db-utils.ts` to fetch and include user subscription status (Plus/Premium) alongside reputation data, enabling the front end to conditionally render the new verification badge."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Performed a comprehensive codebase refactor across the `scripts/` directory, converting multiple database maintenance scripts (e.g., `check-db-status.ts`, `fix-comment-counts.ts`) from CommonJS `require` syntax to ES6 `import` statements."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced the pricing page (`/app/pricing/page.tsx`) to reflect the new verification benefits, aligning the public-facing plan descriptions with the newly implemented badge feature."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a critical performance issue in the Confessions Voting API by adding an explicit *ConfessionVote* check before creating a new vote. This ensures the unique index is utilized, preventing inefficient full table scans during simultaneous vote attempts."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the *voteConfession* database utility to perform a direct, indexed check for an existing vote (`WHERE { userId, confessionId }`) before attempting to insert or update, drastically speeding up the voting process."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a critical authentication bug in the user confessions endpoint (`/api/confessions/user/route.ts`) by correctly obtaining the authenticated user ID from the Kinde session instead of relying on an unverified user ID passed through query parameters."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed redundant, client-provided user ID (`userId`) from the request payload for fetching user confessions, aligning the API hook with the new server-side authentication mandate."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented mandatory **server-side Kinde authentication** for all Confessions API routes (GET, POST, PUT, DELETE), including posts, comments, votes, and reports, ensuring that only authenticated users can perform actions."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored all Confessions API endpoints to derive the `userId` directly from the secure Kinde session data instead of relying on a potentially spoofed `authorId` passed in the request body."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Confessions page client-side logic to remove the redundant `authorId` field from all API payloads, aligning the frontend with the new server-side authentication model."
        date="Aug 6th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the *unique* constraint from the `customerId` field on the User Prisma model, solving a critical database error that prevented multiple new users from logging in via Kinde authentication."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Kinde authentication callback logic to ensure the `customerId` field is *never* set during initial user creation, allowing new users to create accounts successfully without triggering a database uniqueness conflict."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a new maintenance script, *check-customerid-status.ts*, to analyze the current state of `customerId` assignments in the database, helping diagnose existing conflicts and preparing for future data cleanup."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a TypeScript error in `useUnifiedConfessions.ts` by explicitly casting the confession object to the `Confession` type when updating the `savedIds` set, ensuring correct type compatibility during state manipulation."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the state logic for toggling saved confessions in `useUnifiedConfessions.ts` to use `Array.from(prev).concat([confessionId])` instead of the spread operator with `Set`, preventing potential side effects during optimistic UI updates."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored four individual confession hooks (*useConfessions.ts*, *useInfiniteConfessions.ts*, *useSavedConfessions.ts*, and *useUserConfessions.ts*) into a single, robust manager, *useUnifiedConfessions.ts*."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a *Vote Race Condition Fix* by integrating all vote tracking logic into the new unified hook, ensuring that optimistic updates are synchronized across all Confessions tabs (Posts, Hottest, Saved, My Posts)."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new hook, *useTabVisibility.ts*, to detect when the browser tab becomes active, triggering the unified state manager to synchronize vote counts and data when users switch back to the application."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed all legacy, duplicated hook files (*useConfessions.ts*, *useSavedConfessions.ts*, *useUserConfessions.ts*) and replaced all frontend consumption with the new unified hook."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a global state manager for voting (*useVoteState*) that tracks all *pending votes* using a `Set<string>` (combining confession ID and vote type), effectively preventing users from submitting duplicate votes before the first API call completes."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored all confession listing hooks (*useInfiniteConfessions.ts*, *useSavedConfessions.ts*, etc.) to synchronize with the new global state, ensuring optimistic updates are consistent across all tabs and automatically reverting if a vote API call fails."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a testing script (*test-vote-race-condition.ts*) to simulate rapid voting attempts and verify that the backend correctly enforces the one-vote-per-user-per-confession constraint, confirming the fix."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the *unique* constraint from the `customerId` field on the User Prisma model, solving a critical database error that prevented multiple new users from logging in via Kinde authentication."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Kinde authentication callback logic to ensure the `customerId` field is *never* set during initial user creation, allowing new users to create accounts successfully without triggering a database uniqueness conflict."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a new maintenance script, *check-customerid-status.ts*, to analyze the current state of `customerId` assignments in the database, helping diagnose existing conflicts and preparing for future data cleanup."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented three new API endpoints (*stats*, *stats-simple*, and *stats-optimized*) for fetching comprehensive university statistics, including student count and total votes, which were previously missing from the Confessions university tab."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added robust database indexing to *User*, *ConfessionVote*, and *University* models to optimize the performance of the new statistics queries, ensuring fast aggregation even with a large global dataset."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Developed the *stats-optimized* API route using advanced MongoDB aggregation pipelines for maximum efficiency when calculating derived statistics like student count and vote totals."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the *useUniversities* hook to consume the new statistics API endpoints, implementing a fallback mechanism that attempts the *optimized* route first and reverts to the *simple* query if an error occurs, enhancing feature reliability."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a dedicated API endpoint, `/api/confessions/user`, and a corresponding hook, `useUserConfessions`, allowing users to fetch and view only the list of confessions they personally authored."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created several one-off maintenance scripts to fix database integrity issues caused by the `customerId` field's unique constraint (e.g., clearing empty strings, fixing hidden nulls, and resolving constraint errors during initial user creation)."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the Kinde authentication callback logic to prevent attempts to set the `customerId` during initial user creation, resolving a database constraint error that occurred when multiple users were created quickly without a Stripe subscription."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed cache initialization logic from the main API routes for Compete and Study Group rooms, relying instead on API calls to fetch fresh data and ensuring caching is managed exclusively by the client-side hooks to prevent stale server data."
        date="Aug 5th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Deployed advanced MongoDB indexes for comment threading and author lookups, improving query performance by up to 95%. Added maintenance scripts to validate and sync cached comment counts with actual database records, ensuring data integrity across the confessions system."
        date="Aug 4th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a robust aggregation pipeline and created advanced MongoDB indexes to significantly enhance query performance. Key optimizations include compound indexes for infinite scrolling, hot sorting, and university filtering, resulting in 80-95% faster query times and reduced transaction conflicts."
        date="Aug 4th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Finalized performance improvements for the confessions page by adding dedicated counter fields (comments, replies, votes) to the database schema to eliminate expensive aggregation queries. Also implemented comprehensive database indexing, switched API routes to use optimized fetching logic, and added 5-minute public caching headers to significantly reduce load times."
        date="Aug 4th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a dedicated `confessionCount` field in the database to replace slow aggregate queries. Added aggressive caching headers (up to 24 hours for regions), efficient pagination with atomic counter updates, and specific MongoDB indexes to reduce query times from 3-4 seconds to under 500ms."
        date="Aug 4th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem title="Continued collecting all the names of various universities of every country around the world."  date="Aug 3rd 2025" project="study-talk.com Website"/>

      <ScheduleItem
        title="Created a new dedicated API endpoint, `/api/universities/countries`, to fetch the complete and unique list of all available countries from the University database model, enabling front-end country selection."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented an enhanced University Selector component on the client side which utilizes the new Country API to allow users to first filter universities by country, improving the search experience for users setting their university."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the university seeding script (`seed-universities-from-files.ts`) to ensure that university data is loaded and inserted into the database in a structurally proper manner, enforcing the correct assignment of the 'country' field during initialization."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Restructured the global university dataset into *55 separate, country-specific files* (*scripts/universities_by_country/*), replacing the single, large seeding file to enhance organizational structure and optimize maintenance."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the *University* Prisma model to include explicit *region* and *country* fields, allowing for geographically segmented data queries and better classification of the global dataset."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created new utility scripts (*add-region-country.ts*) to automate the process of injecting *region* and *country* metadata into the existing university files, ensuring data consistency across the newly segmented files."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the university seeding logic (*seed-universities-from-files.ts*) to iterate through the new country-specific files, using the *upsert* function to reliably load and update all university data into the database."
        date="Aug 3rd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Restructured the global university data by splitting the monolithic *scripts/seed-universities.ts* file into 50+ country-specific files (*universities_by_country/*), improving data management, modularity, and future updates."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Prisma *University* model by adding *region* and *country* fields, enabling the backend to store and filter universities based on geographical attributes."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new seeding mechanism (*seed-universities-from-files.ts*) designed to read and process the new modular, country-specific files, ensuring the updated geographical data is correctly ingested into the database."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced new API routes (*countries*, *continents*, *by-country*) to allow the frontend to efficiently fetch subsets of universities based on country or region, preparing the groundwork for enhanced university selection UI."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Executed a major cleanup of the global university dataset (*scripts/seed-universities.ts*), removing redundant and duplicate entries to ensure the final list of over 14,000 universities is accurate, unique, and ready for production use."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed approximately 1,000 unnecessary and incorrect lines of university data from the seeding script, stabilizing the integrity of the university list used across Confessions and account verification."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Completed the large-scale data collection effort, integrating a dataset of over 14,000 universities and their corresponding email domains globally via the updated *scripts/seed-universities.ts*."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new utility function, *formatStudyTime*, and implemented it across the Leaderboard, Study Groups page, and Study Time Progress components to standardize the display of study duration (e.g., converting 1.5 hours to '90m' or '1.5h')."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the Welcome Section background logic in *src/app/meetups/page.tsx* to use the new studying GIF across the full container height, simplifying the layout code and enhancing the visual aesthetic."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added the *User* model to the data clearing script (*scripts/clear-data.ts*), ensuring that all user records are removed when performing a full data reset."
        date="Aug 2nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem title="Built a website scraper using python and gemini run locally using Ollama to collect the names of universities from around the world from a 
                           webpage containing this data then arrange it for proper storage to allow users to choose their universities on the study-talk.com website" date="Aug 2 2025" />

      <ScheduleItem
        title="Integrated the *Study Time Tracker* into the Compete room component (`CallRoom.tsx`), ensuring that users' study session durations are correctly recorded in the database whenever they join an active quiz session."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the *CallRoom.tsx* component to use the dedicated `useStreamStudyTimeTracker` hook, enabling the tracking process to start automatically when the user joins the room and end gracefully when they leave."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added visual display of the *Study Time Progress* (via the `StudyTimeProgress` component) to the Compete room's host view, allowing users to monitor their contribution to their daily study goals while participating in the quiz."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a tiered daily posting limit for Confessions: *1 confession* maximum for *free* users, *15 confessions* maximum for *plus* users, and *unlimited* for *premium* users."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new API endpoint, `/api/user/confession-count`, and a corresponding utility function, `getDailyConfessionCount`, to track a user's total number of confessions posted today against their plan limits."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated the new limits into the main Confessions API endpoint (`/api/confessions`), denying POST requests server-side if a user attempts to exceed their daily allowance."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Confessions page client-side logic to fetch and display the user's current post count, disable the 'Make a post' button when the limit is reached, and display informative warning banners based on the user's plan."
        date="Jul 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented server-side validation in the user quiz API (`/api/user-quizzes/route.ts`) to enforce question count limits based on user plan: 20 questions max for Free users, 50 questions max for Plus users, and unlimited for Premium users."
        date="July 30th 2029"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Quiz Creation page (`compete/create-quiz/page.tsx`) to fetch the user's subscription plan, calculate the allowed maximum questions, and disable the 'Add Question' button once the limit is reached."
        date="July 30th 2029"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added visual warning and alert messages to the Quiz Creation UI when a user is nearing or has reached their question limit, providing clear guidance on the restriction and encouraging an upgrade."
        date="July 30th 2029"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Pricing page to accurately reflect that the Plus tier includes a 50-question limit per quiz, while the Premium tier offers an unlimited number of questions."
        date="July 30th 2029"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the DELETE API endpoint for user quizzes (`/api/user-quizzes/[id]`) with server-side logic to verify quiz ownership, enforce rate limiting, and cascade delete the quiz and its associated questions from the database."
        date="July 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a *Delete Mode* to the Quiz Library page, allowing users to select and batch-delete multiple user-created quizzes with a confirmation dialog, improving library management efficiency."
        date="July 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Quiz Library frontend logic to handle quiz selection state (`selectedQuizzes`), manage the *Delete Mode* toggle, and update the UI immediately after successful deletion by removing quizzes from the displayed list."
        date="July 30th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem title="Learned how NodeMailer works" date="Jul 29th 2025" />

      <ScheduleItem
        title="Removed problematic quiz ownership check logic and the unnecessary `checkQuizOwnership` utility function, streamlining the quiz editing flow and eliminating associated security logging."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Disabled spell check on all input fields within the quiz creation page (`compete/create-quiz/page.tsx`) to improve the user experience for entering technical or foreign words that would otherwise be flagged incorrectly."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the client-side validation display to provide clearer error messages for quiz creation errors (e.g., changing 'Invalid enum value' to 'Please select a correct answer')."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed an issue with the `updateQuestion` function on the create-quiz page to remove real-time `sanitizeInput()` on keystroke, which was causing input interference. Also increased the maximum length and size of all quiz text areas (Title, Description, Question, and Options) to allow for longer, more detailed text, supporting up to around 333 words."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented client-side and server-side participant limits based on user subscription plan for both Compete and Study Group room creation. Free users are now restricted to a maximum of 5 participants, and Plus users are prevented from selecting the 'Unlimited' participant option."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the create-room participant options for the compete and study-groups pages from {2, 3, 4, 5, 6, 8} to {5, 10, 15, 20, 25, 30}, setting the default to 5. This change was made to reduce system strain. Additionally, the limit for custom quizzes for 'plus' users was increased from 20 to 50."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a daily study time limit of *15 hours (900 minutes)* for users on the 'plus' plan, restricting their ability to join both Compete and Study Group rooms once this limit is reached."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated all meeting access verification API routes (`/api/room/access-check`, `/api/study-groups/verify/[meetingId]`, `/api/compete-rooms/verify/[meetingId]`) to include checks for both the 3-hour limit for 'free' users and the new 15-hour limit for 'plus' users."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated client-side UI and error messages across meeting pages to display the correct limit for the user's plan (3 hours for Free, 15 hours for Plus) and explicitly encourage upgrading to 'Premium' for unlimited study time."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Pricing page to correctly reflect the Plus plan's maximum study time as 15 hours per day."
        date="Jul 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a daily study time limit of **3 hours (180 minutes)** for users on the 'free' plan, restricting their ability to join both Compete and Study Group rooms once the limit is reached."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated the daily limit check into all meeting access verification API routes (`/api/room/access-check`, `/api/study-groups/verify/[meetingId]`, `/api/compete-rooms/verify/[meetingId]`), ensuring access is denied server-side before the Stream call is initialized."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the client-side UI across meeting pages to display a disabled state on 'Join' and 'Random Room' buttons, and show a clear error toast redirecting the user to the Pricing page to upgrade when they hit the 3-hour limit."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Pricing page to clearly communicate that the 'Plus' and 'Premium' subscription tiers offer unlimited study time, justifying the restriction for free users."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new endpoint, */api/send-email*, that uses the *nodemailer* library to process messages from a frontend contact form and securely send them to the administrator's email address."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added the **'Plus' plan** to the *Plan* enum in the Prisma schema and updated the *Stripe Webhook* handler to correctly process subscriptions for the new Plus tier, supporting both monthly and yearly payments."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the Pricing page to include a new **Contact Me section** utilizing the email sending API, and updated the styling and layout of the subscription comparison table for all three tiers (Free, Plus, Premium)."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Account page logic to correctly determine and display the user's active subscription plan (Free, Plus, or Premium) based on data received from the Stripe webhook."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enforced the uniqueness constraint on the *customerId* field in the User Prisma model, ensuring that each user can only be linked to one unique Stripe customer ID, which is critical for accurate subscription management."
        date="July 29th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the 'Unlimited Participants' feature by updating the RoomSetting database model to allow a nullable 'participants' field, and updating the Study Group and Compete room creation pages to support this option."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added **real-time capacity enforcement** logic to the Study Group and Compete Room listing APIs, checking if the current number of participants exceeds the room's maximum limit and automatically hiding full rooms from the public list."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated cache invalidation into the Stream Webhook handler: whenever a member joins or leaves a call, the active room cache is cleared, ensuring rooms instantly appear when space is available or disappear when they become full."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced the visual design of the Meetups page by adding a *studying-asian.gif* video background to the Welcome Section, improving the page's aesthetic appeal and user engagement."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the Meetups Welcome Section layout in *page.tsx* to split the background area, displaying the new GIF in the upper half with a slate overlay and applying hover effects for visual dynamism."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Adjusted the positioning and styling of the time, date, and welcome message text on the Meetups page to ensure readability and correct overlay on top of the new GIF background."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the core Quiz Answer Submission API endpoint (`/api/quiz-room/[id]/submit`) which validates the user's answers against the correct solutions and calculates the final score, accuracy, and fastest time bonus."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new database utility, `submitQuizAnswers`, to handle the final result submission, storing the calculated score in the `QuizAnswer` model, and updating the overall quiz session status."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the `CallRoom.tsx` component to handle the *end-of-quiz* state, displaying the user's immediate score and prompting them to wait for the final results from all participants."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added the `useQuizResults` hook to fetch and cache the final quiz results for the room once all participants have submitted their answers."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new dedicated API endpoint, `/api/quiz-room`, to fetch detailed quiz room data (questions, settings, and session ID) using the call ID, supporting the active quiz session display in the Compete room."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented strict authentication checks (using Kinde) and rate limiting on all Compete room creation, settings submission, and verification API endpoints to prevent unauthorized access and resource abuse."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added robust server-side input sanitization and validation for Compete Room settings, enforcing max room name length (100 characters) and checking for empty or invalid characters on creation."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the core Compete flow logic in `choose-topic/page.tsx` to align with the new secure API model for room creation, ensuring quiz details are ready before initiating the Stream call."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented robust server-side sanitization and input validation on all Confession and Comment API routes, setting strict content length limits (e.g., 5000 chars for content, 1000 chars for comments) to prevent abuse and ensure database integrity."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced API rate limiting to crucial engagement endpoints: Confession creation is limited to 20 posts/5 minutes and Comment submission to 50 comments/5 minutes to mitigate spamming and bot activity."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the time formatting logic on the Confessions feed and Comment sections, condensing timestamps from verbose phrases ('2 days ago') to concise abbreviations ('2d', '3h') to improve mobile readability."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refined the Confession voting API endpoint (`/api/confessions/vote`) to correctly handle 'unvote' actions by skipping vote type validation during removal, ensuring the removal of a vote proceeds smoothly."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Executed a massive refactoring of the Meeting Room (`MeetingRoom.tsx`), splitting the monolithic component into eight focused, reusable components and one custom hook to reduce complexity, eliminate component sprawl, and improve performance."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created the `useMeetingRoom.ts` hook to encapsulate all core meeting logic, state management (e.g., goals, tracking, dialogs), and API interactions, retiring over 1,000 lines of code from the original MeetingRoom component."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Consolidated multiple security checks (Global Block, Room Ban, Room Settings retrieval) into a single, optimized server-side API call, `/api/room/access-check`, streamlining the pre-join verification process."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Separated complex dialog logic for reporting and banning into dedicated components (`ReportDialog.tsx`, `BanDialog.tsx`, `BanConfirmationDialog.tsx`) and moved controls into a `MeetingControls.tsx` component for cleaner component architecture."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new consolidated API endpoint, `/api/room/access-check`, which performs all necessary checks—global block status, room-specific ban status, and fetching room settings—in a single, optimized database query."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the meeting page flow (`study-groups/meeting/[id]/page.tsx`) to replace multiple sequential frontend API calls (for global block and room ban checks) with a single, fast POST request to the new `/api/room/access-check` endpoint, drastically reducing latency."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Improved performance and security by moving critical access control logic fully to the server side (in `/api/room/access-check`), ensuring users cannot bypass individual checks on the frontend."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented an *in-memory caching system* (30-second duration) within the `useGetCallById.ts` hook to cache Stream call data, drastically reducing repeated API calls to Stream.io when users navigate between pages or components using the same call ID."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced logic to periodically clean up expired cache entries in `useGetCallById.ts` to prevent memory leaks while maintaining fresh call status information for users entering meetings."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a robust **in-memory caching system** for the /api/study-groups GET endpoint (30-second duration) to drastically reduce server load and repeated requests to the Stream.io API for room listings."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the /api/study-groups GET endpoint to handle **server-side pagination** (page, limit) and **search filtering** (roomName), enabling efficient loading of active rooms without fetching all data at once."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented **caching and pagination** for the /api/leaderboard GET endpoint (5-minute cache duration) to stabilize performance and reduce database queries for the top students list."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the API layer to apply a client-side **rate limiting check** (30 requests/minute) to both the Study Groups room listing and the Leaderboard GET endpoints to protect against excessive querying."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented extensive responsiveness and accessibility fixes across the Pricing and About pages, ensuring the content, especially the comparison tables and feature cards, is fully readable and navigable on mobile devices."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Pricing page to dynamically adjust its grid layout, font sizes, and container padding across small, medium, and large screens, improving the presentation of pricing tiers and feature comparisons."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the feature card display logic on the About page to reorganize content structure and icon placement for better vertical stacking and readability on mobile viewports."
        date="July 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented extensive WCAG 2.1 AA accessibility standards across core pages, including the Homepage, Meetups page, and Confessions page."
        date="Jul 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced core site structure by adding ARIA attributes, semantic HTML (main, header, nav roles), and Skip to Main Content links to improve screen reader navigation and overall accessibility."
        date="Jul 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored input fields and buttons across multiple components to ensure logical tab order and visible focus indicators, complying with keyboard-only navigation requirements."
        date="Jul 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a responsiveness bug in the Confessions feed where vote and comment counters were unnecessarily hidden on small screens, ensuring the engagement metrics remain visible on all devices."
        date="Jul 28th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed extensive markdown documentation files related to previous optimization, accessibility, and security implementations (e.g., CSS_SOURCE_MAP_FIX.md, PAGE_ACCESSIBILITY_FIX.md, WEBHOOK_PERFORMANCE_OPTIMIZATION.md), cleaning up the codebase."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented performance optimizations in various pages and components, including modifying the logic for fetching call details and removing unnecessary console logging in production code, continuing the optimization efforts."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the logic in `CallRoom.tsx` to handle the `currentQuestion` display more efficiently, improving responsiveness and data fetching in the active quiz session."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented significant performance optimizations in `CallRoom.tsx` and related components by reducing redundant state updates, optimizing JSON parsing/stringification, and refining API hook usage to prevent unnecessary re-renders in the active meeting view."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced security by implementing Content Security Policy (CSP) headers in `middleware.ts` to mitigate cross-site scripting (XSS) and other injection attacks."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added robust, server-side security validation across quiz creation and room setup APIs to enforce content limits, question counts, and character lengths, preventing abuse and stabilizing database integrity."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented comprehensive WCAG 2.1 AA accessibility improvements on critical pages (including Quiz Creation and Meeting Setup), adding semantic HTML, ARIA attributes, Skip to Main Content links, and keyboard navigation support."
        date="Jul 27th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored numerous API routes across the application (e.g., /admin/bot-detection, /confessions/[id]/report) to update how route parameters are accessed and handled, ensuring compatibility with the latest Next.js App Router conventions."
        date="Jul 26th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented new server-side verification API endpoints (`/api/study-groups/verify/[meetingId]`, `/api/compete-rooms/verify/[meetingId]`) to perform definitive, secured access checks for meeting existence and user block status **before** a user joins a Stream call."
        date="Jul 26th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced a client-side API rate limiting utility (`rate-limit.ts`) and applied it to critical public API routes (e.g., voting, room creation) to prevent automated abuse and protect backend resources."
        date="Jul 26th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added structured server-side logging endpoints (`/api/logging/compete-events`, `/api/logging/security-events`, etc.) to securely capture and monitor user activity, performance, and potential security incidents."
        date="Jul 26th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Reverted the authentication system to rely solely on Kinde Auth, resulting in the complete removal of the custom Two-Factor Authentication (2FA) system and all associated implementation files."
        date="Jul 25th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed all custom 2FA related code, including Admin 2FA setup pages, authentication verification pages, API routes (`/api/auth/2fa`), and the middleware logic enforcing 2FA checks."
        date="Jul 25th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Cleaned up the `User` database model by removing the decommissioned 2FA fields: `twoFactorEnabled`, `twoFactorSecret`, and `backupCodes`."
        date="Jul 25th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Replaced the placeholder 'T' letter logo with a proper image asset (`/Images/logo.svg`) in both `src/app/meetups/talk/page.tsx` and `src/components/CallNextLayout.tsx` to improve the branding consistency across the chat and call interfaces."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refined the toast notification styling in `src/components/ui/toast.tsx` by adjusting padding (`p-2 sm:p-4`) and font sizing (`text-xs sm:text-sm`) to ensure better readability and responsiveness on mobile devices."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the close button icon size in the toast component (`h-3 w-3 sm:h-4 sm:w-4`) to align proportionally with the new compact layout on smaller screens."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the room header in `CallRoom.tsx` to be fully responsive, adding explicit top and left positioning adjustments (`lg:top-[-28px]`, `lg:left-[15px]`) for large screens to prevent layout overlap."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refined the video layout container by introducing a flexible row-based structure for larger breakpoints (`lg:flex-row`, `xl:flex-row`), ensuring the video feed and question sheet align correctly on desktop views."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Adjusted the question and answer sheet containers with granular max-width and height constraints across all breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`), fixing display issues on intermediate screen sizes like tablets and small laptops."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed the unlimited timer progression bug in `CallRoom.tsx`, addressing an issue where the quiz would not correctly advance to the next question when in unlimited time mode."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the `Amazing.mp3` audio file from `public/audio` and updated associated components (`EndCallButton.tsx`, `StudyEndCallButton.tsx`) to remove references to this unused sound asset."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Deleted the `cloudinary.ts` utility file from `src/lib` and updated `package.json`, removing the Cloudinary integration to clean up unused dependencies and reduce technical debt."
        date="Jul 24th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Expanded 2-Factor Authentication (2FA) capabilities to all users by updating the `/app/account` page with a new 'Two-Factor Authentication' section, allowing users to enable or disable 2FA directly from their profile settings."
        date="July 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Modified the 2FA API endpoints (`/api/auth/2fa/setup` and `/api/auth/2fa/verify`) to remove admin-only restrictions, enabling any authenticated user to generate TOTP secrets and verify their setup."
        date="July 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a 'Backup Codes' download feature to the 2FA setup flow, allowing users to save a generated text file (`study-talk-2fa-backup-codes.txt`) for account recovery in case they lose access to their authenticator app."
        date="July 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the authentication callback (`src/app/auth/callback/actions.ts`) to enforce 2FA verification for any user with enabled 2FA, not just administrators, ensuring consistent security policies across the platform."
        date="July 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a mandatory 2-Factor Authentication (2FA) setup for admin users by creating new routes (`/api/auth/2fa/setup`, `/api/auth/2fa/verify`, `/auth/2fa-verify`, `/admin/2fa`) to handle QR code generation, secret verification, and session enforcement."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced the authentication flow by updating `src/app/auth/callback/actions.ts` and `NextLayout.tsx` to check for 2FA completion, redirecting pending admin users to the 2FA verification page before granting full access."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the database schema in `prisma/schema.prisma` to include a `twoFactorSecret` field for users, supporting the secure storage required for the new authenticator-based 2FA system."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Performed a massive cleanup of the project root by deleting 20+ deprecated maintenance scripts (e.g., `check-bans.js`, `fix-updated-at.js`) to streamline the repository and remove technical debt."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the Study Streak feature by adding the `UserStreak` model to the Prisma schema to track `currentStreak`, `longestStreak`, `lastStudyDate`, and `totalStudyDays`."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new API endpoint (`/api/user/streak`) with GET logic to fetch the streak data and POST logic to atomically calculate and update the streak when a user studies (ensuring streak continuity across consecutive days)."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Developed the `useStreak` hook to fetch and manage the user's streak state, and integrated logic in `MeetingRoom.tsx` to automatically trigger a streak update when a user joins a study group call."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added the Streak Counter UI to the main Study Groups page, displaying the user's current streak, longest streak, and total study days."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Improved the mobile responsiveness of the Call Control bar in `MeetingRoom.tsx`, ensuring all action buttons (Participants, Report, Ban) are consistently spaced and remain on a single row across small screen sizes."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Hid the Call Stats Button (`CallStatsButton`) on small screens within `MeetingRoom.tsx` to reduce clutter and prioritize essential controls."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the `StudyEndCallButton.tsx` component to display abbreviated text ('Everyone') instead of 'End call for everyone' on small screens, preventing the button from stretching and maintaining the control bar's compact layout."
        date="Jul 22nd 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a question counter to the Compete room component (`CallRoom.tsx`) that dynamically displays the user's current question number and the total number of questions in the quiz (e.g., 'Question 5/10')."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Replaced the old text-based, gradient logo in the main navigation (`NextLayout.tsx`) with a new SVG image logo (`/public/Images/logo.svg`), improving brand visibility and display quality."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented enhanced responsive design and layout changes across the main Home page (`/page.tsx`) and the About page (`/about/page.tsx`), ensuring content scales correctly and maintains readability on mobile devices."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the feature card component styling on the Home and About pages, simplifying the icon display and optimizing the arrangement of title and description elements for better presentation on small screens."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Applied extensive responsiveness updates across the entire Compete flow, including the Choose Topic, Create Quiz, and Quiz Library pages, optimizing button sizes, text scaling, and margins for mobile and tablet touchscreens."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced perceived performance on the Choose Topic page by implementing **skeleton loading cards** while topic data is fetched, and added logic to **preload topic background images** for smoother visual transitions."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refined global CSS media queries and the `.show-block` modal styles to correctly manage positioning, width, height, and z-index across a wide range of tablet screen resolutions (e.g., iPad Air and Pro), improving modal display stability."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Applied extensive responsiveness fixes to the core meeting components (`MeetingRoom.tsx` and `CallRoom.tsx`), ensuring the video feed layouts and controls are fully functional and usable on small screen sizes (phones and tablets)."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the global CSS (`globals.css`) with complex media queries and custom classes to specifically control the positioning and maximum height of modal/dialog boxes (like the Participant List) on various mobile and tablet screen resolutions."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the `MeetingRoom.tsx` logic to display a translucent black overlay (`bg-black bg-opacity-50`) when the Participant List modal is open on small screens, preventing interaction with the main video area."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the `EndCallButton.tsx` component to display abbreviated text ('Everyone') instead of 'End call for everyone' on small screens, improving button size and visibility in the responsive control bar."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new dedicated component, `MobileStudyTimeProgress.tsx`, to display study session progress and timer information in a compact, mobile-friendly format."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a strict, responsive grid layout for video feeds in `MeetingRoom.tsx`, ensuring video tiles scale correctly and maintain visibility on smaller devices (e.g., forcing single column on phones and adaptive grids on tablets)."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Applied responsive design improvements across administrative pages, including Reports and Reputation dashboards, ensuring search bars, filter selectors, and pagination controls adapt correctly on mobile devices."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Account and About pages to use enhanced responsive styling, including fluid container widths and updated text sizing for improved mobile readability."
        date="Jul 21st 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented extensive responsiveness improvements across the application, optimizing the layout and scaling of the main pages for different screen sizes, especially mobile devices."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the main Home page (`/page.tsx`), Meetups page (`/meetups/page.tsx`), Study Groups page (`/meetups/study-groups/page.tsx`), and Confessions page (`/meetups/confessions/page.tsx`) to utilize modern, responsive utility classes for fluid transitions between mobile and desktop views."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated button and card components (`HomeCard.tsx`, `GroupCard.tsx`) to shrink headers, buttons, and grid layouts on smaller screens, ensuring they fit within the viewport without horizontal scrolling."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented client-side validation in `choose-topic/page.tsx` to prevent Stream call creation errors by ensuring a user has selected either a public topic or a user-created quiz before proceeding."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced a robust **retry mechanism with exponential backoff** (up to 3 times) for the Stream Video `call.getOrCreate()` method to handle transient network errors or temporary API unavailability during meeting creation."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced error handling in `choose-topic/page.tsx` to provide users with specific and descriptive error messages for different types of failures (e.g., 'Network connection issue', 'Request timed out') during meeting creation."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a critical bug in the quiz creation page (`compete/create-quiz/page.tsx`) by ensuring that the actual **answer text** (e.g., 'Paris') is stored in the database as the correct answer, rather than just the corresponding letter ('A', 'B', 'C', or 'D')."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented logic in quiz creation and editing to convert the correct answer letter (for UI display) to the correct answer text (for database storage) and vice-versa, ensuring quiz evaluation works correctly against the submitted answer text."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the `clear-data.ts` maintenance script to include deletion of `UserQuiz` and `UserQuizQuestion` collections, ensuring a complete database reset for user-created quiz data."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Executed a mass removal of debug `console.log` statements across core components, APIs, and hooks (`MeetingRoom.tsx`, `CallRoom.tsx`, `useStreamStudyTimeTracker.ts`, `SocketProvider.tsx`), preparing the application for a stable production environment."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the Reputation System, adding fields like `reputationScore`, `reputationTier`, and `reputationHistory` model to the database, along with dedicated API routes and services to calculate, track, and update user reputation based on platform activity."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Developed the Bot Detection System, adding fields like `botProbability`, `isFlagged`, and `verificationLevel` to the User model, along with comprehensive admin API routes for flagging users and viewing bot detection analytics."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created the Admin Reputation Dashboard page, featuring detailed user reputation statistics, reputation history logs, bot detection stats, and administrative controls (e.g., flagging users) via new `/api/admin/` routes."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a critical bug in the Compete room flow where room settings and call IDs were not properly linked when selecting user-created quizzes, causing 404 errors and preventing the quiz room from loading correctly."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated Confessions API and frontend (`/meetups/confessions/post/[id]`) to remove the display of view counts and enhance internal handling of individual confession posts."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a complete Quiz Creation and Library System, introducing new Prisma models (`UserQuiz`, `UserQuizQuestion`) and corresponding API routes for users to create, manage, and select their own personalized quizzes for competition rooms."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Developed a dynamic Confession Sharing System by creating dedicated pages (`/meetups/confessions/post/[id]`), implementing a new API route to fetch single confessions, and adding a reusable ShareButton component to support sharing via social media."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Replaced all instances of Lucide Loader/Loader2 components with a custom-built, enhanced Loader component across the entire application to provide a uniform, customizable loading experience."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added the Fisher-Yates shuffle algorithm to the `db-utils.ts` question retrieval logic, ensuring that questions from both general topics and user-created quizzes are randomized before every session."
        date="Jul 20th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Completed a major codebase cleanup and recovery operation by removing all files and boilerplate code related to the attempted Supabase migration, including documentation like MIGRATION_START.md."
        date="Jul 19th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Permanently deleted all remaining legacy 'Thanodi Website' features and related code (e.g., Dictionary API, Word pages, /about, /pricing, /meetups/talk) across 20+ files, fully separating Study-Talk services for stability."
        date="Jul 19th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed unused NPM dependencies and cleaned up the Prisma schema, CallNextLayout, and NextLayout components of any dependencies on the decommissioned word-learning feature set."
        date="Jul 19th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Initiated database migration by separating the core Study-Talk services from legacy features, marking the shift away from the shared MongoDB cluster to a dedicated PostgreSQL database on Supabase."
        date="Jul 18th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed all legacy 'Lets Study' features, including the Dictionary/Word API routes (`/api/words`, `/api/google-tts`), associated front-end pages (`/dictionary`, `/about`, `/pricing`, `/meetups/talk`), and related models from the Prisma schema."
        date="Jul 18th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added initial migration documentation and boilerplate files (e.g., Supabase client setup and core SQL schema) to prepare the remaining application functionality (Study Groups, Confessions, etc.) for transfer to the new Supabase backend."
        date="Jul 18th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new API endpoint `/api/room/force-remove` that uses the Stream.io API to forcibly remove a specified user from a given call, ensuring immediate expulsion."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the room ban API endpoint (`/api/room/ban`) to immediately call the `force-remove` API endpoint after a user is banned, ensuring the banned user is instantly kicked out of the active call."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed redundant and problematic client-side event listeners from `MeetingRoom.tsx` that attempted to poll for user removal, relying instead on the immediate server-side force removal and the robust webhook-based re-entry prevention."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added robust handling for the `call.member_removed` webhook event, ensuring participant records are correctly updated in the database when a user is forcibly removed or leaves the call."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a pre-join access control check in the meeting page (`study-groups/meeting/[id]/page.tsx`) that verifies a user's global block status and room-specific ban status before they are allowed to join the Stream call."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a security vulnerability and race condition by preventing blocked/banned users from rendering the `StreamCall` component. Denied users are now **immediately redirected** with a toast notification showing 'Access Denied'."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new backend API endpoint (`/api/call/members`) to reliably verify a user's membership status in a Stream call directly, which is used for pre-join and post-join validation."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Simplified the internal logic of the `MeetingRoom.tsx` component by removing redundant access checks and periodic polling, relying on the robust pre-join check and dedicated Stream event listeners for monitoring user removal."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed the global user block/unblock API routes (`/api/user/block`, `/api/user/unblock`) by removing outdated references to non-existent Stream.io video blocking methods. Global blocking is now handled solely via the database's `User.isBlocked` flag, with enforcement managed by webhooks."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new API endpoint (`/api/user/check-block`) to allow clients to quickly check a user's global block status based on the database's `isBlocked` flag."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the Admin Reports page to use the new `reportedUser.isBlocked` status directly, displaying dynamic Block/Unblock buttons based on the user's current global status, simplifying the moderation workflow."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a maintenance script (`fix-updated-at.js`) using raw MongoDB commands to fix null `updatedAt` timestamps across several models, ensuring data consistency for features relying on time-based sorting or updates."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced the `RoomBan` model to the Prisma schema, enforcing a unique ban per user and call via a composite unique key (`[userId, callId]`), supporting room-specific host bans."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented backend API routes (`/api/room/ban` and `/api/room/ban/check`) to allow hosts to submit a room ban and for clients to quickly check if a user is currently banned from a specific call."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a separate set of Admin-only API routes (`/api/user/block` and `/api/user/unblock`) that handle **global blocking** across the platform, enforcing the block status both in the database and via the Stream.io API's block list."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated ban enforcement into the Stream Webhook handler (`/api/webhooks/stream-call-events`) to check for both global blocks and room-specific bans, immediately removing the user from the call and redirecting them if they attempt to join a room they are banned from."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Admin Reports page to include a new flow for blocking and unblocking users globally, integrating the new `isBlocked` flag on the User model and automatically resolving reports upon blocking a user."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refined the Stream Webhook handler (`/api/webhooks/stream-call-events`) and database utility functions to accurately calculate study session duration using the official `duration_seconds` from the webhook payload, prioritizing sessions that do not yet have a final duration."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the StudySession Prisma model to enforce a unique index on `[userId, callId, date]`, ensuring a user can only have one active study session record per room per day, thereby preventing incorrect duration accumulation."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced a comprehensive reporting and administration framework, including new database models (`Report`, `ReportStatus`, `UserReport`), corresponding API routes for submitting and managing reports, and added `isAdmin` and `isBlocked` flags to the User model."
        date="Jul 17th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced the `CompeteRoom` model into the Prisma schema to persistently track active quiz rooms, including the `callId`, `roomName`, `hostId`, and an `ended` status."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new backend API (`/api/compete-rooms`) with logic to manage active quiz rooms: reading data from the database, querying Stream.io for real-time status/members, and auto-ending rooms that are vacant or inactive for more than 5 minutes."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the Compete Room listing page (`/meetups/compete/page.tsx`) to replace the Stream API-only polling mechanism with a new `useCompeteRooms` hook that fetches the authoritative list of active rooms from the database-backed API."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated Compete Room lifecycle management into the Stream Webhook handler to automatically mark a Compete Room as `ended` in the database when Stream.io sends a `call.ended` or `call.session_ended` event."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the room creation flow (`choose-topic/page.tsx`) to automatically send a POST request to the new `/api/compete-rooms` endpoint, creating a persistent room record immediately after the user selects a topic and generates the Stream call."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented core Study Group Room management logic within the Stream Webhook handler to automatically mark a room as `ended` in the database when a `call.ended` event is received from the Stream API."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced the `/api/study-groups` GET endpoint to reliably clean up inactive rooms by checking for three conditions: Stream call ended (`ended_at`), zero members, or host no longer present, ending the room in the database if any condition is met."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added robust logic to the `MeetingRoom.tsx` component to handle the host's use of the End Call Button and ensure the associated database room is correctly marked as ended, providing a smooth exit for all participants."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Introduced an automatic room cleanup mechanism to the `/api/study-groups` GET endpoint that closes and ends rooms which have had zero activity (no call updates) for more than 5 minutes."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Deleted the entire `study-groups/personal-room/page.tsx` file, removing the dedicated UI page for personal, non-group study calls."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed all references and conditional logic related to 'personal rooms' from `MeetingRoom.tsx` as this feature was decommissioned."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored `MeetingRoom.tsx` to correctly derive the host status by calculating `isHost` from `call.state.createdBy` and `localParticipant`, ensuring the End Call Button is only shown to the host."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented the Confessions page, including new Prisma models for `University`, `Confession`, `ConfessionVote`, `ConfessionComment`, and `SavedConfession` to enable posting, voting, and saving content by university students."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a complete **Stream Webhook Handler** (`/api/webhooks/stream-call-events`) to receive real-time call events (member joined/left, call ended), enabling reliable server-side tracking of study session start and end times in the database."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new dedicated Stream Duration API endpoint and utility functions to fetch the **server-reported, precise call duration** from the Stream API, replacing the former client-side manual time calculation for study sessions."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the frontend tracking logic to introduce `useStreamStudyTimeTracker.ts`, migrating the entire study time tracking system to rely on the new webhook/duration API model, significantly enhancing the accuracy and robustness of the study time feature."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed legacy client-side timing and tracking functions from `MeetingRoom.tsx`, `StudyCallControls.tsx`, and `study-groups/page.tsx`, simplifying the component logic and reducing dependency on client stability for accurate time recording."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored all Study Time Tracking logic to operate in **minutes** instead of hours (including `StudySession` model, API, and `db-utils.ts`) to improve precision and simplify calculations for the leaderboard."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created the `useStudyTimeTracker` hook to manage the lifecycle of a study session, sending API calls to the backend to correctly record the `joinedAt` (start) and calculate the `leftAt` (end) timestamp for persistence in the database."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated Study Time Tracker into `MeetingRoom.tsx` and `StudyCallControls.tsx`, ensuring tracking starts immediately upon joining a study group call and reliably sends an 'end' event when the user leaves or the component unmounts."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Study Group Leaderboard UI (`leaderboard/page.tsx`) to fetch and display study time in minutes, converting the value to a user-friendly format (seconds, minutes, or hours) on the frontend."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed the 'comments not showing up' bug by setting the Comments API route (`/api/confessions/[id]/comments`) to dynamically force a fresh request, preventing stale data from Next.js caching."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the `getConfessionComments` utility in `db-utils.ts` to manually fetch all comments, filter for top-level comments, and explicitly retrieve nested replies, ensuring correct hierarchical comment display after a page refresh."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Improved the client-side comment flow by adding an `updateCommentCount` function to optimistically update the confession list UI and changing comment submission default from anonymous to non-anonymous, displaying the user's name."
        date="Jul 16th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a dedicated backend API route (`/api/confessions/[id]/comments`) for fetching and posting comments to a specific confession, utilizing new database helper functions to support comment threading and anonymous posting."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a CommentSection component and integrated it into both the main Confessions feed and the University-specific feed, adding state management to toggle comment visibility per confession card."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the confession voting logic and API (`/api/confessions/vote`) to handle unvoting actions and to correctly read the current user's vote status for persistent UI display."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the Confessions infinite scroll and list API endpoints to optionally accept a `userId` parameter, enabling the backend to enrich the confession data with whether the current user has voted on or saved each confession."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Developed new API routes and logic for Infinite Scrolling confessions (`/api/confessions/infinite`), backend logic for voting/saving confessions, and created the frontend structure and hooks for displaying confession feeds."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Integrated **Study Time Tracking** by adding the `StudySession` model to record user activity in study groups, enabling the creation of the new **Study Group Leaderboard** page (`/meetups/study-groups/leaderboard`) that fetches ranked user data via a new `/api/leaderboard` endpoint."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the core `User` model to associate users with a `universityId` and track `totalStudyTimeMinutes`, requiring migration and deployment of new database schemas."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a dedicated `study-groups/create-room/page.tsx` that allows users to configure **room name**, **mic/camera settings** (on, off, flexible), and **availability** before starting a study group. This utilizes a new `study-room-settings` API endpoint."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the main `study-groups/page.tsx` to remove all in-line room creation logic (including the old 'Instant Meeting' modal and function) and redirect the 'Create a room' button directly to the new configuration page (`/create-room`)."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the backend logic in the new `/api/study-room-settings` POST endpoint to persist the initial configuration data for study groups."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the placeholder section in `src/app/account/page.tsx` that previously contained a static 'Profile Picture' heading, description, and an 'Upload Photo' button."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created the `StudyGroupRoom` model in the Prisma schema to persistently track active study group meetings by `callId`, `roomName`, and `hostId`, including an `ended` status."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a dedicated backend API for study groups (`/api/study-groups`) with endpoints for listing active rooms (GET), creating a new room record (POST), and ending a room (PUT), retiring the reliance on Stream's query filters for persistent data."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created the `useStudyGroups` hook to fetch and poll active study groups from the new backend API every 15 seconds, and introduced logic in `study-groups/page.tsx` to dynamically display these rooms, replacing static placeholder cards."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a custom `StudyEndCallButton.tsx` component and logic in `MeetingRoom.tsx` to mark the study group room as `ended: true` in the database when the host leaves, ensuring the room is removed from the active list."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented user synchronization in `tokenProvider` (`stream.actions.ts`) using `client.upsertUsers` to ensure the Stream backend has up-to-date user names and profile pictures from Kinde authentication."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed member caching/optimisation logic in `usePublicCalls.ts` and forced `queryMembers` for all active calls on every fetch to guarantee the freshest member lists and avatars for public room display, resolving issues with stale data."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated both `MeetingSetup.tsx` and `CallSetup.tsx` to explicitly add the authenticated user as a call member (`call.updateCallMembers`) upon joining, ensuring their avatar and data are immediately available to the room listing page."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced `compete/page.tsx` logic to robustly normalize member data (handling arrays, Maps, and objects) and check multiple potential properties to correctly retrieve member profile pictures for GroupCard display."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the `@unique` constraint from the `callId` field in the `RoomSetting` database model and implemented application-level checks in `db-utils.ts` to enforce uniqueness during updates, resolving an API conflict error."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the POST endpoint for room settings (`/api/room-settings`) to explicitly strip any provided `callId` from the payload, preventing conflicts during initial room creation."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Enhanced the public room display in `compete/page.tsx` to correctly handle various formats of member data (arrays or objects) and use `participantCount` as a fallback to calculate and display the current number of people in a room."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the host-present check (`c.state.members.some(...)`) from the active calls filter in `usePublicCalls.ts`, simplifying the logic to only exclude calls that are officially ended (`!c.state.endedAt`) to improve the display of available rooms."
        date="Jul 15th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Revised the `usePublicCalls.ts` hook to loosen the filtering criteria for displaying active rooms. It now only excludes calls that have been formally ended (`!c.state.endedAt`), removing the requirement that the host must be present in the call's member list to be considered active."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Fixed a critical bug in the API routes (`/api/room-settings/[id]` and `/api/room-settings/call/[callId]`) by correctly modifying how route parameters are accessed. The context parameters were awaited (`await context.params`) to properly handle Next.js App Router conventions."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the `usePublicCalls.ts` hook to strictly filter for **active calls** by only including calls that are not ended (`!c.state.endedAt`) AND where the host is currently a member (`c.state.members.some(...)`), resolving an issue where call members were intermittently missing from the list."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the pre-call setup screen (`CallSetup.tsx`) to replace the single 'mic and camera off' checkbox with explicit **Mic On/Off** and **Camera On/Off** buttons, governed by the room's persistent settings ('flexible' status), providing clearer user control."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented custom call controls in the active room view (`CallRoom.tsx`) that conditionally display **Mic and Video toggle buttons** and a **Leave button** based on room settings, replacing the default Stream `CallControls` component for specialized quiz functionality."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated logic in `CallSetup.tsx` and `CallRoom.tsx` to read the initial mic/camera status directly from the persisted `roomSettings` to correctly set the initial state (on/off) of the media inputs upon joining the call."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Re-added the filter `custom.quizStarted: false` to the Stream call query in `usePublicCalls.ts` to ensure the list of fetched public calls only includes rooms where the quiz has not yet started, fixing an issue where all calls were being loaded."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a **search bar** functionality in `compete/page.tsx` that filters the displayed public rooms by `roomName` based on user input."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a **'Join a random room'** feature in `compete/page.tsx` that selects an available public room (prioritizing rooms matching the current search query, if any) and directs the user to join it."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />
      
      <ScheduleItem
        title="Initialized the Stream call's custom data with `quizStarted: false` during room creation in `choose-topic/page.tsx`, ensuring the state is correctly set from the beginning to prevent issues with public room listing."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the `CallRoom.tsx` component to make the **End Call Button** and **Choose a topic** button visible only to the host (`isHost`), restricting key room control actions to the meeting creator."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the alert message in `CallSetup.tsx` from 'The quiz has already started' to the more descriptive **'Host has started quiz'** when participants try to join a room where the quiz is underway."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Removed the `custom.quizStarted: false` filter from the Stream call `queryCalls` in `usePublicCalls.ts`, relying instead on the client-side filtering logic in `compete/page.tsx` for displaying public rooms, which helps prevent unnecessary requests and potential API limits."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created a new script, `cleanup-orphan-calls.ts`, that uses the Stream Node SDK to iterate through all active calls and **delete** any where the host is no longer present, preventing orphaned/inactive calls from persisting."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated `CallRoom.tsx` to detect when a call has been ended by the host (using `useCallEndedAt`) and display an `Alert` to participants, ensuring they are informed when the session is over."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />
      
      <ScheduleItem
        title="Implemented host-call-control logic in both `MeetingRoom.tsx` and `CallRoom.tsx` to automatically call `endCall()` and `delete()` on the Stream call when the host leaves, ensuring the meeting terminates for all participants."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Optimized the `usePublicCalls.ts` hook to prevent API rate limiting issues by reducing the call polling frequency from 5 seconds to **15 seconds** and implementing **caching** to avoid querying members for the same calls repeatedly."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated the script `clear-data.ts` to include the new `RoomSetting` collection in the database cleanup process, ensuring a complete reset of quiz-related data."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the `GET` and `PUT` API routes for room settings (`/api/room-settings/[id]`) to correctly access the `id` parameter from `context.params`, fixing an issue where the Next button in the room creation flow was not working."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Renamed the API route structure for fetching room settings by call ID from `/api/room-settings/[id]/call/[callId]` to the simpler `/api/room-settings/call/[callId]`."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Created the `RoomSetting` model in the Prisma schema to persistently store detailed quiz room configurations (e.g., questions count, mic/camera settings, availability, topic), and implemented `db-utils` helper functions for managing this data."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented a complete REST API for room settings (`/api/room-settings`), including routes for creating (POST), fetching (GET), updating (PUT), and fetching by Stream call ID, to replace the unreliable client-side `localStorage` room setting management."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored the entire room creation and setup flow (`create-room`, `choose-topic`, `CallSetup`, `CallRoom`) to save/fetch settings via the new API, ensuring the Stream `callId` is correctly linked back to the persistent `RoomSetting` database entry."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Updated `usePublicCalls.ts` hook to fix display issues by applying new query filters, specifically `custom.quizStarted: false`, and ensuring member data is fetched for all calls to display accurate participant counts."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a client-side filter to the public call room list in `compete/page.tsx` to explicitly exclude any rooms where `quizStarted` is true, resolving the problem of inactive rooms showing up."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />
      
      <ScheduleItem
        title="Implemented `usePublicCalls.ts` hook to continuously fetch public call rooms every 5 seconds, filtering for rooms with `custom.availability: 'public'` and `custom.hostJoined: true`."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Refactored `compete/page.tsx` to dynamically display the fetched public call rooms using the new hook, replacing hardcoded placeholders, and implemented logic in room creation/setup to save and apply `availability` and `roomName` to the call's custom data, and set `custom.hostJoined: true` when the host joins."
        date="Jul 14th 2025"
        project="study-talk.com Website"
      />
      
      <ScheduleItem title="Tried to create Kinde Auth custom login and signup pages using their github repo" date="Jul 24th 2025" />
       <ScheduleItem
          title="Updated callroom.tsx to fetch fresh quiz room data after updating questions via PUT endpoint, replacing the previous manual state update approach."
          date="Jul 14th 2025"
          project="study-talk.com Website"
        />

        <ScheduleItem
          title="Added error handling to the question update flow: verifies the PUT request succeeded before attempting to fetch the updated room data, falling back to manual state update on failure."
          date="Jul 14th 2025"
          project="study-talk.com Website"
        />

        <ScheduleItem
          title="Modified updateQuizRoomQuestions function to delete all existing quiz answers before updating questions, ensuring clean state when questions are recreated."
          date="Jul 14th 2025"
          project="study-talk.com Website"
        />
      
      <ScheduleItem
        title="Added API route `GET /api/quiz-room/[id]` to fetch quiz room data, including `questions`, `settings`, and `sessionId`, so clients can retrieve quiz configuration server-side."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Extended the `getQuizRoom` helper in `db-utils.ts` to accept a `roomId` and return the full quiz room data (questions, custom settings, sessionId), with error handling returning `null` on failure."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />
      
      <ScheduleItem
        title="Made the topic-selection modal scrollable by adding `max-h-[80vh]` and `overflow-y-auto` to the `<DialogContent>` in CallRoom so long topic lists don't overflow the viewport."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added functionality to the Choose a topic button and Restart Quiz button in CallRoom (wiring UI controls to actions and session APIs)." 
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Added a topic-selection modal: imported Dialog primitives and TopicCard, introduced `showTopicModal` and a `topics` state array, added a `pastelColors` palette, implemented a `useEffect` that fetches `/api/topics` and populates `topics`, and rendered the modal (DialogPortal → DialogOverlay → DialogContent) with a responsive grid that maps `topics` to `<TopicCard title description backgroundImage className={pastelColors[idx%...]}` (each card closes the modal via `handleClick`)." 
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Implemented host Restart Quiz flow and controls: added `handleRestartQuiz` (host-only) that POSTs to `/api/quiz-room/${quizRoom.id}/session`, sets `sessionId`, `startTimestamp`, `quizEnded=false`, `quizStarted=true`, resets `currentIdx` and `selectedAnswer`, sets `timeLeft` from roomSettings or quizRoom, then calls `call.update` with `custom: { quizStarted: true, sessionId, currentIdx: 0, startTime: Date.now(), quizEnded: false }`; wired this to render a Restart button for hosts and kept a Choose a topic button that opens the modal." 
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Began working on a ‘Choose a topic’ button in CallRoom: added state to show a topic-selection modal, imported the Dialog component from Radix, and rendered a new ‘Choose a topic’ button in the controls that toggles the dialog open." 
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Moved the host’s Start Quiz button into the call controls section and replaced its old location with a short message guiding hosts to start the quiz from the controls, consolidating all quiz actions (start, restart, choose topic) into a single, consistent UI area."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
          title="Implemented session locking and synchronization for quizzes: CallRoom now creates or joins a session with sessionId, submits answers only if sessionId, quizRoom, currentQuestion, and user exist, auto-submits blank answers when timer expires, disables answer controls during active sessions, and synchronizes quiz timing and question indexing across all participants." 
          date="Jul 13th 2025"
          project="study-talk.com Website"
        />

        <ScheduleItem
          title="CallSetup changes: hosts create/lock quiz sessions when starting a quiz, propagate sessionId and room settings to participants, prevent changing quiz settings after session start, and ensure all participants wait for the session before rendering the quiz UI to avoid race conditions." 
          date="Jul 13th 2025"
          project="study-talk.com Website"
        />

        <ScheduleItem
          title="Package updates: regenerated package-lock.json and updated dependencies in package.json to support the new session and quiz flow logic." 
          date="Jul 13th 2025"
          project="study-talk.com Website"
        />

      <ScheduleItem
        title="Fixed layout flicker in CallRoom by locking the video container width (`w-[50rem]`) so question/results panels no longer resize when camera toggles, and updated TopicCard component to support a visual selected overlay using `isSelected` prop without affecting layout, wiring it up in ChooseTopic page to highlight the selected topic." 
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Database + seeding: added a new `Topic` Prisma model (id, title, description, backgroundImage, createdAt) to prisma/schema.prisma and created a new seed script `scripts/seed-topics.ts` which seeds multiple topics (e.g., 'American History', 'MCAT') with title, description and backgroundImage fields; also added a new npm script `db:seed-topics` and updated the clear-data script to delete quizSession and adjust log messages for easy reset."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="API additions and validation: added a new API route `src/app/api/topics/route.ts` that fetches topics via GET using `getTopics()`, and tightened validation in `src/app/api/quiz-room/[id]/answer/route.ts` to require sessionId along with userId, questionId, and answer when posting."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Frontend — ChooseTopic page: removed hard-coded topics array and replaced with useState plus useEffect to fetch topics from the API, updated handleNext to route to the app root (`router.push('/')`), and rendered topic cards dynamically from the database."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="CallRoom changes (quiz flow & UI): added/updated submitAnswer logic with internal selectedAnswer state, guards for quizRoom/currentQuestion/user/sessionId, auto-submit blank answers when timer expires, safely slice quizRoom.questions using roomSettings.numQuestions, and updated results rendering to show answers and reveal correct answers below incorrect submissions."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Frontend — layout & styling tweaks: adjusted results container sizing and scrolling, reduced gaps, centralized layout, and applied small className and layout changes in choose-topic/page.tsx and CallRoom to support database-driven topic cards and updated results UI."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem
        title="Lib helpers: added `getTopics()` in src/lib/db-utils.ts to fetch all topics from the database with safe error handling returning an empty array on failure."
        date="Jul 13th 2025"
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Added Restart and Topic buttons in CallRoom, allowing users to restart the quiz or re-open topic selection directly from the call." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated ChooseTopic page navigation: handleNext now routes to the app root (`router.push(/)`) instead of `/room-lobby`, and adjusted CallRoom layout and header spacing, including reduced top padding, removal of extra bottom margins, and centered Room Name header." 
        date="Jul 13th 2025"
        project="study-talk.com Website" 
      />

      <ScheduleItem 
        title="Refactored Results panel in CallRoom: resized container, added scrolling, structured per-user blocks with username, score, and answer list, and applied consistent styling for clarity and readability." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Performed general cleanup and minor markup fixes across CallRoom, including className adjustments, tag wrappings, and DOM reordering to reduce layout flicker and improve container consistency." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />
      
      <ScheduleItem 
        title="Changed display of user’s answers in CallRoom results so that each question is shown above the user’s submitted answer, users’ answers are color-coded green if correct and red if incorrect, and the correct answer is displayed below the user’s answer if they got it wrong, making the review process clearer and easier to understand." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Reworked the results summary layout to place the 'Correct Answers' and 'Wrong Answers' counts side-by-side instead of stacked, adjusted flexbox, spacing, and container alignment to prevent overlapping, and formatted question numbering and layout for better readability." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated db-utils getQuizResults function to include full details for each user’s answer including question text, user’s answer, correct answer, and correctness, added sorting to ensure answers appear in the original question order, and refactored mapping logic to return structured per-user answer lists for easier frontend rendering." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Removed the opacity effect on selected topics in the ChooseTopic page and updated the class styling for the selected-topic visual state to improve clarity and consistency." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Fixed the flickering issue. Here is my description of it below: Im getting a flickering issue in Callroom.tsx whereby the elements move 
                about and the camera stream turns on and off rapidly. I noticed that it happens each time a value on the page changes like for example 
                when the timer is counting down each value causes the flickering to happen. I also noticed that it stops happening when the results are shown. 
                This is probably because nothing is changing on the webpage. I also noticed that the flickering stops when I turn my camera off. I dont 
                understand why this error is occuring." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="In CallRoom.tsx: refactored layout logic — replaced direct component calls with dynamic `LayoutComponent` & `layoutProps` for clearer structure." 
        date="Jul 13th 2025"
        project="study-talk.com Website" 
      />

      <ScheduleItem 
        title="In CallRoom.tsx: adjusted CSS margin-right from large fixed value to smaller `mr-[2rem]` to fix positioning of question sheet card overlay." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="In CallRoom.tsx: changed call video render section from `<CallLayout />` to `<LayoutComponent {...layoutProps} />` for dynamic layout switching." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Performed general cleanup in CallRoom.tsx: 17 additions, 12 deletions to clean up flicker triggers and layout inconsistencies." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Removed useSearchParams import and deleted isPersonalRoom query-param logic from CallRoom." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Removed unused EndCallButton import from CallRoom to clean up component dependencies." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Deleted the automatic microphone and camera toggle useEffect that relied on roomSettings." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Adjusted createSession and related useEffect logic to simplify flow and remove unnecessary side effects." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Refactored layout markup at the top of CallRoom, improving structure and readability." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Performed general cleanup in CallRoom with 57 additions and 65 deletions to simplify and streamline the component." 
        date="Jul 13th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Encountered an error whereby when a user joins a call with their camera on, it flickers on and off leading to the camera 
              stream changing size rapidly. This happens in CallRoom.tsx." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated src/app/api/quiz-room/[id]/route.ts to await params (const { id } = await params) and use id when calling getQuizRoom." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated src/app/api/quiz-room/[id]/results/route.ts to await params for id, and pass the extracted id to getQuizResults (preserving sessionId query support)." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated src/app/api/quiz-room/[id]/answer/route.ts to await params for id, validate presence of sessionId in the request body, and use id as roomId when saving answers." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Small refactor across quiz-room API routes to standardize parameter handling (changed params typing to Promise<{ id: string }> and consistently extracted id via await)." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />
      <ScheduleItem 
        title="Modified Prisma schema to introduce QuizSession and update QuizAnswer model to include sessionId, allowing session-level separation of answers." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Created new API endpoint `/api/quiz-room/[id]/session` to initiate a new quiz session ID for a room." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated API endpoint `/api/quiz-room/[id]/answer` to require sessionId along with userId, questionId and answer when posting quiz answers." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated API endpoint `/api/quiz-room/[id]/results` to optionally accept sessionId query param, fetching results scoped to that session or full room." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Refactored `useQuizResults` hook to accept both roomId and sessionId, adjusting fetch URL accordingly." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated `CallRoom.tsx` component: added state for sessionId, logic to create session when user joins, updated sendAnswer to include sessionId and guard logic to ensure session exists." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated `db-utils.ts` helper functions: added `createQuizSession`, updated `saveQuizAnswer` to upsert based on sessionId_questionId_userId uniqueness, and updated `getQuizResults` to filter by sessionId if provided." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Expanded CallRoom to fully support quiz questions and answers: UI now displays dynamic options and highlights selected answer." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Added logic in CallRoom to send the user’s selected answer via POST request to the quiz-room API endpoint." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Reset selectedAnswer state in CallRoom using a useEffect hook when question index or room changes." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Refactored CallSetup component to integrate new quiz flow." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Created a custom hook `useQuizResults` to manage and provide quiz result data throughout the app." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Enhanced `db-utils.ts` with functions to support saving and retrieving quiz responses." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated the choose-topic page (`page.tsx`) to handle question retrieval and integrate with CallRoom and quiz flow." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />
      <ScheduleItem 
        title="Created a new Prisma model (TopicQuestion) to store quiz questions and answer options." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Added a seeder script to populate the database with topic-based quiz questions and updated package.json with a new seed command." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Added a new API route to fetch quiz questions by topic, including full error handling and query validation." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated the choose-topic page to replace hardcoded questions with API-fetched data and updated typings for dynamic quiz content." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Updated the CallRoom component to display questions and answer options dynamically, added selectedAnswer state, button highlighting, and an API POST request to submit answers." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Created a new db-utils helper (getTopicQuestions) to retrieve topic questions from Prisma with safe error handling." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem 
        title="Modified the QuizRoom schema to use MongoDB ObjectId and aligned schema fields for future room-based quiz logic." 
        date="Jul 12th 2025" 
        project="study-talk.com Website"
      />

      <ScheduleItem title="Utilised localstorage to store room settings for video call, added API routes to store user answers to quiz questions, 
                          added useeffect hooks to detect when quiz has ended, display quiz questions while timer has not run out, made some UI 
                          changes, added more files to the hooks folder, and more. " date="Jul 11th 2025" project="study-talk.com Website"/>

      <ScheduleItem title="Massive update on the study-talk.com website: created the omegle style videoCall functionality using websockets, learned 
                          how to use socket-io, added compete page which I am still currently working on integrating the backend, updating the prisma 
                          schema, adding a timer and more, I also added a confessions page where students can make posts about their wildest 
                          confessions." date="Jul 10th 2025" project="study-talk.com Website"/>

      <ScheduleItem title="The dictionary website was becoming too big so I split the site into 2 seperate parts, one site that provides dedicated English to 
                            Setswana translation functionality and another that's especially made for students to study together around the world, this second
                            website is called study-talk.com and it was built around the video conferencing functionality" date="Jul 9 2025" project="Thanodi Dictionary Website & study-talk.com" />

      <ScheduleItem title="Began translating and adapting the repository’s architecture for integration into a Next.js + Prisma + MongoDB codebase. 
                          Investigated Next.js limitations, discovering that Socket.IO is not supported in serverless API routes, prompting an 
                          evaluation of architectural options which included running Next.js on a custom Node.js/Express server, or deploying a 
                          separate standalone Socket.IO server." date="Jul 2nd 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Successfully cloned, configured, and ran a complex open-source Omegle-like project using React, Redis, and Socket.IO, overcoming 
                          numerous setup and Docker-related issues. I also gained hands-on experience with Docker, including container setup, script 
                          execution, and troubleshooting." date="Jul 2nd 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Attempted integration of GetStream.io WebRTC, identifying limitations for random-pairing functionality and evaluating alternative solutions. 
                          Also conducted extensive research on Omegle-style architectures, reviewing multiple GitHub repositories and analyzing real-world implementations." date= "Jul 1st 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Added meeting functionality, including an “enter code” field and “start room” button for joining online rooms" date="Jun 30 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Created a Leaderboard system to rank users based on study session duration" date="Jun 30 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Designed and built the Confessions page frontend, featuring a Reddit-style interface for posting and reacting to university confessions" date="Jun 30 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Implemented the core backend logic for the Study Group page, enabling fully functional study session tracking" date="Jun 29 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Developed multiple Meetups features, including Study Groups, Confessions, Online Competitions, and an Omegle-style random chat system" date="Jun 28 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Expanded the Thanodi platform by completing the full tutorial and adding a new Meetups section to the site’s navigation" date="Jun 27 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Began learning about how Zoom video conferencing works through WebRTC by watching a youtube tutorial utilising getstream-io" date="Jun 25th 2025" project="N/A"/>
      
      <ScheduleItem title="Coded for the whole day and slept at 4:36am" date="Jun 24th 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Removed the saved words page and moved it to the home page instead of making it into a dedicated page, added the tab bar, sidebar
                          and more to the website" date="Jun 24th 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Managed to implement voice pronounciation fallback feature whereby the dictionary website utilises
                            voice mp3 files stored on cloudinary and if it can't find them, it uses Google's TTS API and if that doesn't work,
                            the site fallbacks to the browser's tts" date="Jun 24th 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Utilised Googles Text-To-Speech API (TTS) as a fallback incase the audio files from cloudinary can't be accessed by
                          by my website for some reason or if an error occurs" date="Jun 23rd 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Researched about storing audio files using AWS S3 buckets and Cloudinary to allow pronounciations of words to be 
                          made. Also researched about setswana dictionaries online." date="Jun 21st 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Fixed an error occurring when someone tries to cancel their subscription. 
                          Made major UI changes, connected Mongodb database to my frontend and ran a seeder function to populate the database. 
                          Also reminded myself about REST APIs." date="Jun 20th 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Fixed UI errors on the website and also reduced redundancies to make the code more cleaner" date="Jun 19th 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Learned more about radix-ui and also built the UI of the Thanodi dictionary website using Builder.io" date="Jun 18th 2025" project="Thanodi Dictionary Website"/>

      <ScheduleItem title="Decided to learn about Next.js, how app router works, global.css, tsconfig.json, etc. Also learned about TanStack/react-Query package, 
                          radix-ui and next-themes" date="Jun 17th 2025" project="N/A"/>

      <ScheduleItem title="Began working on Thanodi, an online dictionary website that translates from english to setswana and vice versa" date="Jun 16th 2025" project="Thanodi Dictionary Website"/>      

      <ScheduleItem title="Decided to deepen my knowledge about stripe by watching a dedicated tutorial about it" date="Jun 7th 2025" project="N/A"/>

      <ScheduleItem title="Decided to implement my knowledge of MERN by building an E-commerce store with authentication measures e.g bcrypt and also utilised stripe" date="May 30th 2025" project="E-Commerce Store Website"/>
      
      <ScheduleItem title="Reminded myself how to backend program using MERN stack through watching a tutorial on YouTube" date="May 27th 2025" project="N/A"/>

      <ScheduleItem title="Fixed projects page so that it looks proper on small screens and I was then done coding my personal website" date="Mar 3rd 2025" project="Portfolio Website"/>

      <ScheduleItem title="Made a few improvements to the responsiveness of Blog and made changes to other pages" date="Mar 2nd 2025" project="Portfolio Website"/>
      
      <ScheduleItem title="Made a lot of changes to Blog Page and made fixes to other webpages" date="Mar 1st 2025" project="Portfolio Website"/>
      
      <ScheduleItem title="Completed the Blog and Roadmap pages then added some finishing touches on the website" date="Feb 9th 2025" project="Portfolio Website"/>

      <ScheduleItem title="Fixed a lot of bugs and deployed the website on vercel" date="Feb 9th 2025" project="Portfolio Website"/>

      <ScheduleItem title="Made some changes to the Blog and Roadmap pages" date="Feb 8th 2025"project="Portfolio Website" />

      <ScheduleItem title="Made the Projects page" date="Feb 7th 2025" project="Portfolio Website"/>
 
      <ScheduleItem title="Made initial sketches of the Projects, Blog and Roadmap pages" date="Jan 25th 2025" project="Portfolio Website"/>

      <ScheduleItem title="Finished making the About Me page" date="Jan 23rd 2025" project="Portfolio Website"/>

      <ScheduleItem title="Finished the Home page of my personal website" date="Jan 17th 2025" project="Portfolio Website"/>

      <ScheduleItem title="Made a tiktok video based on the car website" date="Jan 15th 2025" project="N/A"/>
      
      <ScheduleItem title="Went on to code a car website" date="Jan 7th 2025" project="Car Website"/>

      <ScheduleItem title="Started coding this personal website" date="Jan 5th 2025" project="Portfolio Website"/>

      <ScheduleItem title="Finished the website but couldn't submit my work on time, but instead published the code to github" date="Nov 11th 2024" project="SchooLama"/>

      <ScheduleItem title="Began coding an alternative, user friendly school management system to Canvas for MakeUC Hackathon" date="Nov 10th 2024" project="SchooLama"/>
    
    </section>
  );
};

const ScheduleItem = ({ title, date, project }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 border-b border-zinc-800 px-3 pb-9"
    >
      <div>
          <p className="mb-1.5 text-xs lg:text-xl text-zinc-50">{title}</p>
          <p className="lg:mt-2 text-[0.65rem] lg:text-sm uppercase text-zinc-500">{date}</p>
          <p className="lg:mt-2 text-[0.65rem] lg:text-sm uppercase text-purple-200 leading-tight break-words">Project: {project}</p>
      </div>
    </motion.div>
  );
};
