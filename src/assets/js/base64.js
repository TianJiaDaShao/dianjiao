const star = () => {
  //星
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA5CAYAAABqMUjBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MTFCMTk3RDkzRDgxMUU4ODQ3Q0E2QkNGOTM2NzVBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MTFCMTk3RTkzRDgxMUU4ODQ3Q0E2QkNGOTM2NzVBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMUIxOTdCOTNEODExRTg4NDdDQTZCQ0Y5MzY3NUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxMUIxOTdDOTNEODExRTg4NDdDQTZCQ0Y5MzY3NUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/b1hGAAABR5JREFUeNrcm1tsFFUYx2e620LbLbQUhBYoWyQEUeKlFbSkQEhQg4lAULlE8Ul948HLs4kvGhNDoiDBFxOMCZdAuDwAMRFtUEOgQSGFGuUipa1oL0LRWm71/8/+m2walp0zOzM7syf5p5vduf3mfOc73/edU7urp88KsD0CbYSWQ8PQfmgz1O72gjXVVUbHxwOEHQ89D70EVeq7ddAFqAP6J4iHKAoQeBG0IQ2WbQL0KtQc1EMEBVwKPQPNvcdvj+q34kICboIWZPjN1m8LCgWYfmIN9MR9jmmA1kKxQgAm6PwsMGOgp6CHow5cAb0GzXZw7Bw5sIooA8+ClslpZWvlmrZmRBWY089qqNbgnDroBT972U/ghxRYlBucw2Nf0bmRAh6nQCPp4tzZmsbKogT8JLTe5fVjmqIaowJcqilmXg7XaFAgEo8CMHv3OUVQuQQrzwo81MAMIFaoh70IR1d5HWPnYjLFAqRKoIRAl3hkihwaS6GfoJNKH29KQ9At5dRGzXZQALClIjmUydB0aCpUL088Le27Sg/H3m2ID9gFdUJXoEvQ7/ruMtSt4wh/t6a6atgNMMFqpOkKCGoFlFRgUKZeTeizbfnbCPKvevoGNAhdV/HgD72ADr0YvoQOwA9mAibgYyrBTBFYrXqLSXq1Po+zwtkI1i9r4N+/oauC58v4GWrFC7hJYPbQi3I28wRcbhVGuwP9CZ2C9kE74nI07wSRmuWhpQ9N+ptLdEQL5YgKvXFYNhK4xwqoYpjnRgfXReDD0DHZe6E2dujX0Dccw+ehTxVIrFAgUWg9uwvaBi/dMRIgHIc+UgSz0u8yS4CNU9QOaAtg20aHlq3Qh4JeUwDQnIu303oBez5TLH0W+kARDYtv4yMK20sThrYC9kq25IFrPR9roL8OTYwYLCOsT6AvANvtNFtiUL4F+g960zIrxOWzMZbeLNi/TNPDTpkF07E3FKmEuf2mTtoO2D63+fBVQbOnN4YYmrCbBHsj1wIAXfvnGtPvKZMKU7sIvc+5FrBDXpV46LW/hN6FfmWiHQJQPkO7nmmnE1jTmhbNeg/0tkLRfLcW6C3oAPNcpyeZFvF44YPQD9BAnoMKAh8C7C2TE91WLccGUNK5X7Mtl9VMN8CMvrh1IZFHYD4Dy1FlQQDXhST6muJmxjAF5jT2YEgSC1pYsru3P+Yn8BgFH4mQANebjmVT4BLdJCw9PEPP5KtJE7g0BMAsJSf97uEKvdVYCIBL3Lx8U2Auu1SHKI5m2jrJL+BSeeixIQIuM/XURYZOYqYV0J5Ih61Y49hxABI3BK63civjMgE5quSDL5sbXxabetpR4zgp3zLgNXC5m3lPrU+pHJMOLmp9r+8JzPIp17e4E6/SJXDCjx6u0sVtQ1Am6Eeg3dDpUbl0i+Afh162Uvs66gzA4xpmFV4D2+rdiQame06QB6zUqn2m9Ssu8ZyUBXxlpRYCuGt+lsPhw5njATguO9vqvwlwpYCzHc98+bgKBd9Zqa0J/Q7vwVoUF65ZRz5kpfaKcN26MYtVJWR5NO8hr4CH5WQy3XhwJCGHTujB3a5I9kq/6OU9baW2QTVnmFVi0h0vTZpvv1WmmUz7vkfm2CLPe8xysbMmQ7smK/lR92CPN6nH08fsGfoGmPNtR2PT4N94GGFx+YWbP7nXo1NTDP8V51RA826TzLxZz8Ni+2fQXgAPeA084qmXKpxrk9e9FmCgUaR7N8ip0eK+Bex1pxf4X4ABAFZJEcpEXQH0AAAAAElFTkSuQmCC'
}

const starActive = () => {
  //选中星
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA5CAYAAABqMUjBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QUMxNEE3RTkzRDgxMUU4ODQ3Q0E2QkNGOTM2NzVBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QUMxNEE3RjkzRDgxMUU4ODQ3Q0E2QkNGOTM2NzVBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBQzE0QTdDOTNEODExRTg4NDdDQTZCQ0Y5MzY3NUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBQzE0QTdEOTNEODExRTg4NDdDQTZCQ0Y5MzY3NUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9pVypAAABSRJREFUeNrcm11sFFUYhs90t4V2t1AFAauUrRJUlKi0gtQUDYlC3EQ0/qAG5Uq948KfaxJvMCbERFGDNyYYE9CYKGjUaFQa0BBp8CcoG0WRtlQQivxoLRTL++6+mE3jsnNmZ2Zn9kuedDO78/PO+c53vu+cU2fs/TkmRLsOrAZ3gjHwHlgP9nq+YjZn9fNkiGIn8/HA/aBFxx4Cv4A+8FcYD1EXouDF4NEisbSLwSOgO6yHCEtwI7gDzP2f767Xd/W1JLgLLCzxnaPvFtaKYMaJFWD+BX7TAR4EiVoQTKELyoiZAG4G18ZdcDNYBdyMfVcrgDXHWfBscLuCVjlLadiaFVfBHH7uBa0W57SBu4Js5SAFX6PEImVxDn+7UufGSvAkJRoZD+fO0TDWFCfBN4GHPV4/oSGqMy6CGzXEzKvgGh1KRJJxEMzWXaYMqpJkZamER1owE4jlamE/0tF7/M6xK3GZegkkDSAtobf55IrsGkvAN2CXysfTYgScUU1tZY6LCQBH1CmgTAczwWWgXZH48qJjLT72vVEwBA6CAdAP9oPfdOwAGNTvKP5fk82NeRFMYZeKmUoIWiUoo8SgSa2a1mfHBGsU8rda+hQYBic0efC7XkCfXsxg/nM2N1xKMAXeoCmYGRLWqtZikT5FnyeZaBqFHZM38O+f4JDE82V8C3rxAk5TMFvoPgWbeRKcMrVhZ8FhsBu8CzYlFWieDqM0q4IVd03Gm/0MRLcoENW6sVt2UvARE9KMYZWNAe4gBX8Etsvfa9XYoJ+Az9iH94GXlEgsVyJRay37FtiAKN13PkHYCZ5XBnN30NMsIRqHqE3gZYjdMz617AXPSfSKGhDNsXhj3nuzuX2lcukfwFplNJx8mxxTsUfzLmzMqxDbX6544FrPOnX0x8DUmIllhvUieB1iB91WSwfyfm/MP+AJYzcRV01jLr1eYv+wLQ8H5BYsxx5XphJl+1mNtBFih7zWw4ckmi29OsKiKfYFiT1V6QQAQ/tr6tNrVElFyX4Fz+bH2mxuxK8pHkbtN8Az4Kd8oV194zPs1TNtdiPWdk6Lbv0OeEqpaLWtBzwJtrDOdXuS7SQeL7wVfAlOVjmpoOAPIfaMzYleZy0nhjClcyFzjMfZTC+CmX1x60K6ioL5DJyOagpDcFtEsq8ZXkYMW8Ecxq6MSGFBD8uYD65KBCl4gpKPdEQEt9v2ZVvBDbpJVFp4lp4pUJem4MYICE6ZwqJAoC3crLeaiIDgBi8v31Ywl12mRCiPZtl6SVCCGxWhJ0ZIcJNtpK6zDBJXmJD2RLq0evVj1wlI0lJwu6lsGpcFyOcqPviyufHlVttIO64fZxRbTvotOOVl3JMNqZRj0cFFrR06TsGcPuX6FnfitXgUnA6ihS/SxR1LoSzQPwZvg+/G1dI9En8jeMAU9nW0WQhPqps1+y3YUetOtXDdHyVyiyms2pdav+ISzy55wJumsBDAXfOzXXYfjhzTELiccqv/NoJbJLjc71kv79REwTZT2JpwzOU9OBfFhev+fJ1b2CvCdevOMl6VlufRvUf8EjymIFPqxsP/FeTGfK0H97oieVTk9PIWmcI2qO4So0pCnPXTpfn2e+WamaLjR+SOPYq8242HnTUl7Li85Cvdgy3epRYv7rPf52NDNjfqp+BRBReuMnLzJ/d6DGiI4b/i7A5wrGU3+VR0yc27lfFxsv0Vm/s7lv+3xEi9ROncHkXd4yEmGnW6d4eCGj3uC7TuCbcXOCfAAOE+GFiGeg5oAAAAAElFTkSuQmCC'
}

module.exports = {
  star: star,
  starActive: starActive
}
