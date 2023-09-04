---
# Front matter of "classic" page

# Theme to use. Resides in the "_layouts" folder.
layout: default

# Page title. If omitted, the page will not be included in the navbar.
title: RadioSvegliaGBE

#################################################################

# Specifies the order of the current page from the point of view of the navbar. Can have repetition in the numbers, for parent-child hierarchies.
nav_order: 1

# Let exclude the page from the navbar
nav_exclude: false

# Let exclude the page from the built-in search engine
search_exclude: false

#################################################################

# Set "true" if this page has childrens, "false" otherwise.
has_children: false

# If this page is some page's child, specify the parent's name, otherwise comment out the option. If this page is some page's grandchild, specify grandparent's name, otherwise comment out the option.
# # parent: NOME_PAGINA_GENITORE
# # grand_parent: NOME_PAGINA_NONNO__GENITORE_DEL_GENITORE

# If this page is a parent page, a Table Of Contents will be automatically generated containing all related child pages. Use the option below to disable this functionality. Should always be set to "false".
has_toc: false

#################################################################

# Specify the current language of this page
lang: it

# Specify all other available languages in which this page is available. If there's no other language in addition to "lang", comment out this option.
# # availableLanguages:
# #   - 

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

L'intera documentazione del software, generata via Doxygen, è qui reperibile: [Documentazione software](/RadioSvegliaGBE/pages/it/PartialSourceCodeDocumentation/doxygen/html/index.html)

---

## Case 3D

Il case 3D è stato realizzato mediante Autocad e stampato utilizzando una stampante 3D; infine, è stato assemblato manualmente. Gli assets 3D sono reperibili qui di seguito:

- [GBEback.gcode](/RadioSvegliaGBE/src/gcodes/GBEback.gcode)
- [GBEbackdx.gcode](/RadioSvegliaGBE/src/gcodes/GBEbackdx.gcode)
- [GBEbackextension.gcode](/RadioSvegliaGBE/src/gcodes/GBEbackextension.gcode)
- [GBEbacksx.gcode](/RadioSvegliaGBE/src/gcodes/GBEbacksx.gcode)
- [GBEfront.gcode](/RadioSvegliaGBE/src/gcodes/GBEfront.gcode)
