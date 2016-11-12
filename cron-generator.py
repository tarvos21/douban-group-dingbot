#!/usr/bin/env python
import random

cron = open('cron.txt', 'w')
cron.write('')
cron.close()

cmd = open('cmd', 'r')
cmd = cmd.readline()

cron = open('cron.txt', 'a')

for i in range(24):
    line = str(random.randint(7, 17))+' '+str(i)+' '+cmd
    cron.write(line)
    line = str(random.randint(27, 37))+' '+str(i)+' '+cmd
    cron.write(line)
    line = str(random.randint(47, 57))+' '+str(i)+' '+cmd
    cron.write(line)


cron.close()
