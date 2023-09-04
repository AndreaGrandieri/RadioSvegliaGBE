---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: RadioSvegliaGBE

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 1

# Let exclude the page from the navbar
nav_exclude: false

# If this page represents the parent page of a section that, therefore, has children, specify it in the following way
has_children: false

# If this page represents the child page of a section that, therefore, has ONE parent page, specify it in the following way
# # parent: Namespace

# If this page is a parent page, a Table Of Contents will be automatically generated containing all related child pages. Use the option below to disable this functionality.
has_toc: false

# If a child page has more children, add again
# # has_children: true

# To the children page(s) add
# # parent: NOME_PAGINA_GENITORE
# # grand_parent: NOME_PAGINA_NONNO__GENITORE_DEL_GENITORE

# Let exclude the page from the search engine (client-side)
search_exclude: false

# Notice: codeblocks highlighting supported languages listed here: https://www.fabriziomusacchio.com/blog/2021-08-11-Syntax_Highlighting_in_Jekyll/
---

# RadioSvegliaGBE
{: .no_toc }

---

<!-- Table of contents -->
<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

{: .motto-title } 
> <p class="blockquote-title-fixer-purple">tl;dr</p>
>
> Radiosveglia multifunzione interamente realizzata "from sketch", ovvero da zero, sia nella progettazione dell'hardware, sia del software e sia del case 3D.

---

## Documentazione software

L'intera documentazione del software, generata via Doxygen, è qui reperibile: [Documentazione software](pages/PartialSourceCodeDocumentation/doxygen/html/index.html)

---

## Case 3D

Il case 3D è stato realizzato mediante Autocad e stampato utilizzando una stampante 3D; infine, è stato assemblato manualmente. Gli assets 3D sono reperibili qui di seguito:

- [GBEback.gcode](src/gcodes/GBEback.gcode)
- [GBEbackdx.gcode](src/gcodes/GBEbackdx.gcode)
- [GBEbackextension.gcode](src/gcodes/GBEbackextension.gcode)
- [GBEbacksx.gcode](src/gcodes/GBEbacksx.gcode)
- [GBEfront.gcode](src/gcodes/GBEfront.gcode)
