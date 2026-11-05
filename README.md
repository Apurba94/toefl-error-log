# TOEFL Error Log

Every TOEFL question you missed in any app of the suite, to retry and annotate.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `TOEFL Error Log.exe` from the [latest release](https://github.com/Apurba94/toefl-error-log/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-error-log/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Every TOEFL question you miss in any app of this suite, from Complete the Words to Build a Sentence, is logged here with the question itself. Retry them, write a note on why you missed each, and see which tasks cause the most trouble.

Sections: Mistakes, By app, Progress, About.

## How to use it

1. Practise in any TOEFL app; misses appear in **Mistakes**.
2. Add a short note: misheard, did not know the word, ran out of time.
3. Retry them as a set, and see **By app** for where to focus.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
