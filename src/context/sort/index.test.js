import React from 'react'
import SortProvider, { useSortState, useSortDispatch } from './'
import { render, fireEvent } from '@testing-library/react'
import { PRICE_HIGH_TO_LOW, SET_SORT_METHOD } from '../../constants/sort'

describe('SortProvider', () => {
  const TestConsumerComponent = ({ action }) => {
    const { sortMethod } = useSortState()
    const dispatch = useSortDispatch()

    return <button onClick={() => dispatch(action)}>{sortMethod}</button>
  }

  test('should have default state value', () => {
    const { getByRole } = render(
      <SortProvider>
        <TestConsumerComponent />
      </SortProvider>
    )
    expect(getByRole('button')).toHaveTextContent(PRICE_HIGH_TO_LOW)
  })

  test('should allow the dispatching of actions', () => {
    const action = {
      type: SET_SORT_METHOD,
      sortMethod: 'hello'
    }
    const { getByRole } = render(
      <SortProvider>
        <TestConsumerComponent action={action} />
      </SortProvider>
    )

    fireEvent(
      getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(getByRole('button')).toHaveTextContent('hello')
  })

  test('should throw an error when invalid action is dispatched', () => {
    const action = {
      type: 'NOT_VALID',
    }
    const { getByRole } = render(
      <SortProvider>
        <TestConsumerComponent action={action} />
      </SortProvider>
    )

    try {
      fireEvent(
        getByRole('button'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
    } catch (err) {
      expect(err.message).toEqual('Unhandled action type: NOT_VALID')
    }
  })

  describe('useSortState', () => {
    const TestComponent = () => {
      const { sortMethod } = useSortState()
      return <div>{sortMethod}</div>
    }
    test('should throw an error if component is not rendered inside SortProvider', () => {
      try {
        render(<TestComponent />)
      } catch (err) {
        expect(err.message).toEqual('useSortState must be used within a SortProvider')
      }
    })
  })

  describe('useSortDispatch', () => {
    const TestComponent = () => {
      const dispatch = useSortDispatch()
      return <button onClick={() => dispatch()}>Hello</button>
    }
    test('should throw an error if component is not rendered inside SortProvider', () => {
      try {
        render(<TestComponent />)
      } catch (err) {
        expect(err.message).toEqual('useSortDispatch must be used within a SortProvider')
      }
    })
  })
})
