# Quick build notes

mkdocs allows for configuration files to be inherited relative to the source, therefore allowing sites to use a common configuration file `mkdocs.yml` across sites. Settings are overiden by the higher configeration file. Sites build utilize this by setting broader settings in the root and more focused settings in each site build.

To build site, use `mkdocs serve` to generate site.
