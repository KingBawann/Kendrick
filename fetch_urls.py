import urllib.request, re, ssl
ctx=ssl.create_default_context()
ctx.check_hostname=False
ctx.verify_mode=ssl.CERT_NONE

html1 = urllib.request.urlopen(urllib.request.Request('https://en.wikipedia.org/wiki/Section.80', headers={'User-Agent': 'Mozilla/5.0'}), context=ctx).read().decode('utf-8')
m1=re.search(r'"(https://upload.wikimedia.org/wikipedia/en/[^"]*\.jpg)"', html1)
print('S80:', m1.group(1) if m1 else 'None')

html2 = urllib.request.urlopen(urllib.request.Request('https://en.wikipedia.org/wiki/Overly_Dedicated', headers={'User-Agent': 'Mozilla/5.0'}), context=ctx).read().decode('utf-8')
m2=re.search(r'"(https://upload.wikimedia.org/wikipedia/en/[^"]*\.jpg)"', html2)
print('OD:', m2.group(1) if m2 else 'None')
