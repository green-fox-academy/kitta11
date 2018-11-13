def format_duration(seconds):
    if seconds == 0:
        return "now"
    else:
        years = seconds // (60*60*24*365)
        days = (seconds % (60*60*24*365))//(60*60*24)
        hours = ((seconds % (60*60*24*365)) % (60*60*24))//(60*60)
        minutes = (((seconds % (60*60*24*365)) % (60*60*24)) % (60*60))//60
        seconds = (((seconds % (60*60*24*365)) % (60*60*24)) % (60*60)) % 60
        years_text = "year{}".format("s" if years != 1 else "")
        days_text = "day{}".format("s" if days != 1 else "")
        hours_text = "hour{}".format("s" if hours != 1 else "")
        minutes_text = "minute{}".format("s" if minutes != 1 else "")
        seconds_text = "second{}".format("s" if seconds != 1 else "")
        resultlist = [lambda x: bool(x), [
            "{0} {1}".format(years, years_text) if years else "",
            "{0} {1}".format(days, days_text) if days else "",
            "{0} {1}".format(hours, hours_text) if hours else "",
            "{0} {1}".format(minutes, minutes_text) if minutes else "",
            "{0} {1}".format(seconds, seconds_text) if seconds else ""
        ]]
        clearedresult = [item for item in resultlist[1] if len(item) > 0]
        if len(clearedresult) > 1:
            return '{} and {}'.format(', '.join(clearedresult[:-1]), clearedresult[-1])
        else:
            return clearedresult[0]


print(format_duration(1))
# format_duration(36662)

# "1 hour, 1 minute and 2 seconds"


def format_duration_pro1(seconds):
    if seconds == 0:
        return "now"
    units = ((31536000, "year"),
             (86400, "day"),
             (3600, "hour"),
             (60, "minute"),
             (1, "second"))
    ts, t = [], seconds
    for unit in units:
        u, t = divmod(t, unit[0])
        ts += ["{} {}{}".format(u, unit[1], "s" if u >
                                1 else "")] if u != 0 else []
    return ", ".join([str(d)for d in ts[:-1]]) + (" and " if len(ts) > 1 else "") + ts[-1]

    times = [("year", 365 * 24 * 60 * 60),
             ("day", 24 * 60 * 60),
             ("hour", 60 * 60),
             ("minute", 60),
             ("second", 1)]


def format_duration_pro2(seconds):

    if not seconds:
        return "now"

    chunks = []
    for name, secs in times:
        qty = seconds // secs
        if qty:
            if qty > 1:
                name += "s"
            chunks.append(str(qty) + " " + name)

        seconds = seconds % secs

    return ', '.join(chunks[:-1]) + ' and ' + chunks[-1] if len(chunks) > 1 else chunks[0]


def f(n, unit):
    return [', ', '{} {}{}'.format(n, unit, 's' if n > 1 else '')]


def format_duration(seconds):
    if not seconds:
        return 'now'

    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)
    days, hours = divmod(hours, 24)
    years, days = divmod(days, 365)

    fs = []
    if years:
        fs.extend(f(years, 'year'))
    if days:
        fs.extend(f(days, 'day'))
    if hours:
        fs.extend(f(hours, 'hour'))
    if minutes:
        fs.extend(f(minutes, 'minute'))
    if seconds:
        fs.extend(f(seconds, 'second'))

    fs[-2] = ' and '
    fs.pop(0)
    return ''.join(fs)



def format_duration(seconds):
    l = [('%d '+i[1]+ ('s' if i[0]-1 else ''))%i[0] for i in [(seconds/(365*24*3600),'year'),((seconds/(24*3600)%365),'day'),((seconds/3600)%24,'hour'),((seconds/60)%60,'minute'),(seconds%60,'second')] if i[0] ] if seconds else ['now']  
    return ', '.join(l[:-1])+('' if len(l)==1 else ' and ' )+l[-1]