# IATI Data Extractor

This folder contains build files for Beehive's automated IATI Data Extractor tool.

###Auxiliary Resources

- Design Overview: [extractor_design-overview.md](https://github.com/BeehiveNGO/Auxiliary/blob/master/design_specifications/extractor_design_overview.md)
- IATI Data Extractor [Wiki Page](https://github.com/BeehiveNGO/Beehive/wiki/IATI-Data-Extractor)
- [Milestones](https://github.com/BeehiveNGO/Beehive/milestones), [Issues](https://github.com/BeehiveNGO/Beehive/issues), [Project Kanban Board](https://github.com/BeehiveNGO/Beehive/projects/8)
- Project Coordinator: [Brent Phillips](http://github.com/brentophillips)

##Overview

[IATI]() is an open data sharing standard and framework created by the [International Aid Transparency Initiative](http://iatistandard.org). Over 500 humanitarian and development organizations are using IATI to share detailed, machine readable information about their aid activities. To publish to IATI, organizations convert aid activity information into XML, host the files on their servers and sent metadata on the files to IATI.

## HXS

IATI's API isn't setup to power sophisticated, open-data-driven applications operating at scale. Beehive is building a Humanitarain Exchange Server ([HXS]()) developers can use to power IATI applications. The server will essentially scrape and reserve IATI's whole dataset, providing developers with access to an up-to-date dataset built specifically for applications.


## IATI Data Extractor Specifications

Beehive needs to build an automated data extraction tool to 
