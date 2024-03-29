\documentclass[]{main}
\fullname{ {{- (ds "about").name -}} }
\jobtitle{DevOps Engineer}

\begin{document}
\resumeheader
{\email{ {{- (ds "about").email -}} }}
{\linkedin{ {{- (ds "about").linkedin -}} }}
{\github{ {{- (ds "about").github -}} }}
{\phone{+98 937-758-8105}}
{\website{ {{- (ds "about").website -}} }}
{\nationality{Iran, Tehran}}

{{ define "markdown" }}
{{- . | strings.ReplaceAll "&" "\\&" | strings.ReplaceAll "#" "\\#" | strings.ReplaceAll "%" "\\%" | strings.ReplaceAll "  \n" " \\newline " | regexp.Replace "[*][*](.*?)[*][*]" "\\textbf{$1}" | regexp.Replace "[*](.*?)[*]" "\\textit{$1}" | regexp.Replace "[[](.*?)[]][(](.*?)[)]" "\\href{$2}{$1}" -}}
{{ end }}

{{ define "subsections" -}}
{{ range $i, $item := . -}}
    \begin{subsection}{ {{- $item.title -}} }{ {{- $item.subtitle | tmpl.Exec "markdown" -}} }{ {{- $item.date -}} }{ {{- $item.location -}} }
        {{ range $j, $_item := $item.items -}}
        \item {{ $_item.text | tmpl.Exec "markdown" }} {{ if has $_item "link" -}} \;\href{ {{- $_item.link -}} }{\faExternalLink*} {{- end }}
        {{ end -}}
    \end{subsection}
{{ end -}}
{{ end -}}

{{ define "subsectionsnobullet" -}}
{{ range $i, $item := . -}}
    \begin{subsectionnobullet}{ {{- $item.title -}} }{ {{- $item.subtitle | tmpl.Exec "markdown" -}} }{ {{- $item.date -}} }{ {{- $item.location -}} }
        {{ range $j, $_item := $item.items -}}
        \item {{ $_item.text | tmpl.Exec "markdown" }} {{ if has $_item "link" -}} \;\href{ {{- $_item.link -}} }{\faExternalLink*} {{- end }}
        {{ end -}}
    \end{subsectionnobullet}
{{ end -}}
{{ end -}}

\begin{section}{Education}
    {{ (ds "educations") | tmpl.Exec "subsectionsnobullet" }}
\end{section}

\begin{section}{Areas of Interest}
    \begin{subsectionbullet}
        {{ range $i, $item := (ds "interests") -}}
        \item {{ $item }}
        {{ end -}}
    \end{subsectionbullet}
\end{section}

\begin{section}{Relevant Courses \small{(Graduate courses are indicated by *)}}
    \begin{multicols}{2}
        \begin{subsectionbullet}
            {{ range $i, $item := (ds "courses") -}}
            \item {{ $item.title }} \hfill \textit{ {{- $item.grade -}} }
            {{ end -}}
        \end{subsectionbullet}
    \end{multicols}
\end{section}

\sectiontable{Licenses \& Certifications}{
    {{ range $i, $item := (ds "licenses") -}}
    \entry{ {{- $item.title | tmpl.Exec "markdown" -}} }{ {{- $item.subtitle -}} \hfill \textit{ {{- $item.date -}} }}
    {{ end -}}
}

\begin{section}{Honors and Awards}
    \begin{subsectionbullet}
        {{ range $i, $item := (ds "honors") -}}
        \item {{ $item.title | tmpl.Exec "markdown" }} \hfill \textit{ {{- $item.date -}} }
        {{ end -}}
    \end{subsectionbullet}
\end{section}

\sectiontable{Technical Skills}{
    {{ range $i, $item := (ds "skills") -}}
    \entry{ {{- $item.title | tmpl.Exec "markdown" -}} }{ {{- conv.Join $item.skills ", " | tmpl.Exec "markdown" -}} }
    {{ end -}}
}

\begin{section}{Research Experience}
    {{ (ds "experiences_research") | tmpl.Exec "subsections" }}
\end{section}

\begin{section}{Teaching Experience}
    {{ (ds "experiences_teaching") | tmpl.Exec "subsections" }}
\end{section}

\begin{section}{Work Experience}
    {{ (ds "experiences_work") | tmpl.Exec "subsections" }}
\end{section}

\begin{section}{Notable Projects}
    {{ (ds "projects_notable") | tmpl.Exec "subsections" }}
\end{section}

\begin{section}{Published Projects}
    {{ (ds "projects_published") | tmpl.Exec "subsections" }}
\end{section}

\sectiontable{Languages}{
    {{ range $i, $item := (ds "languages") -}}
    \entry{ {{- $item.title -}} }{ {{- $item.description -}} }
    {{ end -}}
}

\end{document}
