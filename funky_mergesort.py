"""
Mergesort, but with absolutely no recursion (only a half-baked simulation of
recursion)
"""

# Sort a list of numbers in increasing order
def mergesort(lst):
    # If the list has 1 or 0 elements, it is sorted and we can return it
    if len(lst) < 2:
        return lst

    # These are here to mimic a more advanced style of programming
    callstack = []
    return_queue = []

    # Split the list in half, and add a list with both halves to the callstack
    callstack.append([lst[:len(lst) // 2], lst[len(lst) // 2:]])

    # While there are things in the callstack
    while callstack:
        # Get, destructure, and remove the last thing in the callstack
        [lst1, lst2] = callstack.pop()

        # Check if the list is small enough to be a trivial case
        if len(lst1) < 2:
            return_queue.append(lst1)
        # Add the first list to the callstack to be sorted later
        else:
            callstack.append([lst1[:len(lst1) // 2], lst1[len(lst1) // 2:]])

        # Do to the second list what we already did for the first list
        if len(lst2) < 2:
            return_queue.append(lst2)
        else:
            callstack.append([lst2[:len(lst2) // 2], lst2[len(lst2) // 2:]])

        # Check the return queue for a sorted half of a list
        if return_queue:
            lst1 = return_queue[0]
            return_queue = return_queue[1:]

            # Check the return queue again for the other half
            if return_queue:
                lst2 = return_queue[0]
                return_queue = return_queue[1:]

                # Merge the two halves and add them to the return queue
                return_queue.append(mergesort_helper(lst1, lst2))

            # We only have half a sorted list
            else:
                return_queue.append(lst1)

        # Merge everything remaining in the return queue
        while len(return_queue) > 1:
            # Get the first 2 lists from the return queue
            [lst1, lst2] = [return_queue[0], return_queue[1]]

            # Remove the first two lists from the retuen queue
            return_queue = return_queue[2:]

            # Add the merged list to the return queue
            return_queue.append(mergesort_helper(lst1, lst2))

    # We only have one thing in the return queue, so we can return it
    return return_queue[0]
