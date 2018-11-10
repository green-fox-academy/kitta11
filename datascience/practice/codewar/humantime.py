import math


def make_readable(seconds):
    if seconds > 359999:
        return 'Give smaller number'
    else:
        hour = seconds // 3600
        minute = (seconds % 3600)//60
        second = (seconds % 3600) % 60
        if hour >= 10 and minute >= 10 and second >= 10:
            return("%s:%s:%s" % (hour, minute, second))
        elif hour >= 10 and minute < 10 and second < 10:
            return("%s:0%s:0%s" % (hour, minute, second))
        elif hour >= 10 and minute >= 10 and second < 10:
            return("%s:%s:0%s" % (hour, minute, second))
        elif hour >= 10 and minute < 10 and second >= 10:
            return("%s:0%s:%s" % (hour, minute, second))
        elif hour < 10 and minute >= 10 and second >= 10:
            return("0%s:%s:%s" % (hour, minute, second))
        elif hour < 10 and minute < 10 and second >= 10:
            return("0%s:0%s:%s" % (hour, minute, second))
        elif hour < 10 and minute >= 10 and second < 10:
            return("0%s:%s:0%s" % (hour, minute, second))
        else:
            return("0%s:0%s:0%s" % (hour, minute, second))


print(make_readable(356987))
print(make_readable(114726))
print(make_readable(3600))


def make_readable_pro(s):
    return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)